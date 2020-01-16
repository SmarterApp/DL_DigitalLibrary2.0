import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { expand } from 'rxjs/internal/operators/expand';
import { map } from 'rxjs/internal/operators/map';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { reduce } from 'rxjs/internal/operators/reduce';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';
import { tap } from 'rxjs/internal/operators/tap';
import { DataService } from '../data.service';
import { SearchResults } from './search-results.model';
import { SearchRequestModel } from './search-request.model';
import { coalesce } from 'src/app/common/utils';
import { ResourceService } from '../resource/resource.service';
import { Claim } from '../resource/model/claim.model';
import { Grade } from '../resource/model/grade.model';
import { Subject } from '../resource/model/subject.model';
import { Standard } from '../resource/model/standard.model';
import { Target } from '../resource/model/target.model';
import { SearchFilters, Filter, emptyFilters } from './search-filters.model';
import { ResourceType } from '../resource/model/resource-type.enum';
import { ResourceSummary } from '../resource/model/summary.model';
import { fastArrayMerge } from 'src/app/common/utils';
import { initialSearchFilters } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private dataService: DataService) { }

  getDefaultFilters(): Observable<SearchFilters> {
    // return this.dataService.get('/api/search/filters');
    // TODO: Replace with an actual way to get default filters

    return of(JSON.parse(JSON.stringify(initialSearchFilters)));
  }

  fetchAllResults(req: SearchRequestModel): Observable<SearchResults> {
    return this.dataService.get('/api/search_dl_resources', req).pipe(
      // Fetch all pages of results. expand passes all outputs back into the
      // supplied function. So page 1 is fetched, goes through the expand
      // function and returns an observable for the request for page 2. That
      // page 2 observable is fed back into the expand function resulting in
      // the request for page 3, etc.
      expand(page => {
        // Only try to actually fetch the next page if we have a next link.
        return (this.hasNextPage(page) ?
                this.dataService.get(page['hydra:view']['hydra:next']) :
                of({ 'hydra:view': {} })).pipe(
                  // This is what actually causes the expand recursion to stop,
                  // returning an immediately completed Observable when the
                  // page has no next link.
                  takeWhile(this.hasNextPage)); }),

      // At this point we have a stream of page results. Now we transform the
      // result items into our ResourceSummary model and collect the summaries
      // and all the filter data into one intermediate object. Note that the
      // form of this intermediate object is:
      //
      //     { results: ResourceSummary[][],
      //       filters: SearchFilters[][] }
      //
      // This is for performance. It will be faster to merge all the resource
      // summary collections together at once, and de-dupe the filter
      // collections once than to do it every time we map in another page of
      // results.
      reduce(
        (acc, page) => {
          acc.results.push(page['hydra:member'].map(this.resourceSummaryFromJson));
          acc.filters.push(page['hydra:member'].map(this.extractFilters));
          return acc;
        },
        { results: [], filters: [] }),

      // Now we flatten our non-flattened (Bumpy) results lists and filter
      // lists into our final SearchResults shape, de-duping the filter values
      // along the way.
      map((bumpy: BumpySearchResults): SearchResults => ({
        results: fastArrayMerge(bumpy.results),
        filters: this.sortFilters(this.dedupeFilters(fastArrayMerge(bumpy.filters), req.Search_Text))
      }))
    );
  }

  private hasNextPage(page: any): boolean {
    return page['hydra:view'].hasOwnProperty('hydra:next');
  }

  /**
   * Maps one JSON object representing a search result item from the API into
   * our ResourceSummary object model.
   */
  private resourceSummaryFromJson = (json: any): ResourceSummary => {
    return {
      id: json.resourceId,
      properties: {
        authorOrg: json.authorOrganization,
        authors:   json.resourceAuthors.map(ra => ra.name),
        claims:    json.claims.map(this.claimFromJson),
        grades:    json.grades.map(this.gradeFromJson),
        standards: json.standards.map(this.standardFromJson),
        targets:   json.targets.map(this.targetFromJson),
        title:     json.title,
        image:     json.imagePath,
        isBookmarked: false,
        lastUpdatedDate: new Date(json.updatedAt),
        subject: this.subjectFromJson(json.subject),
      },
      type: json.dlResourceType.description,
      summary: this.summaryFromJson(json),
      hasNotes: false
    };
  }

  private summaryFromJson(json: any): string {
    const resourceContentKeys = [
      ['dlResourceContentIr', 'overview'],
      ['dlResourceContentPl', 'overview'],
      ['dlResourceContentCp', 'description'],
      ['dlResourceContentStrategy', 'overview']];

    for (const [key, field] of resourceContentKeys.values()) {
      if (json[key]) {
        return json[key][field];
      }
    }

    // If we've not found any summary TODO: throw an error?
    return '';
  }

  private claimFromJson(jsonClaim: any): Claim {
    return {
      code: jsonClaim.code,
      number: jsonClaim.sequenceNo,
      title: jsonClaim.description
    };
  }

  private gradeFromJson(jsonGrade: any): Grade {
    return {
      code: jsonGrade.code,
      shortName: jsonGrade.shortDescription,
      longName: jsonGrade.description
    };
  }

  private standardFromJson(jsonStd: any): Standard {
    return {
      code: jsonStd.code,
      title: jsonStd.standard,
      description: jsonStd.description
    };
  }

  private targetFromJson(jsonTgt: any): Target {
    return {
      code: jsonTgt.code,
      number: jsonTgt.number,
      description: jsonTgt.description
      // FIXME: API currently never returns target groups.
      // group: ???
    };
  }

  private subjectFromJson(jsonSub: any): Subject {
    if (!jsonSub) {
      return {
        code: null,
        shortName: null,
        fullName: null
      };
    } else {
      return {
        code: jsonSub.code,
        shortName: jsonSub.shortDescription,
        fullName: jsonSub.description
      };
    }
  }

  private extractFilters(res: any): SearchFilters {
    // TODO: drop this 'as' special case once the data layer has been updated.
    const hasSubject = res.subject && res.dlResourceType.code !== 'as';

    return {
      query: '',
      resourceTypes: [{ code: res.dlResourceType.code, title: res.dlResourceType.description }],
      grades: res.grades.map(g => ({ code: g.code, title: g.description })),
      subjects: hasSubject ? [{ code: res.subject.code, title: res.subject.description }] : [],
      claims: res.claims.map(c => ({ code: c.code, title: `${c.sequenceNo}: ${c.description}` })),
      targets: res.targets.map(t => ({ code: t.code, title: `${t.number}: ${t.description}` })),
      standards: res.standards.map(s => ({ code: s.code, title: s.standard }))
    };
  }

  private dedupeFilters(filtersList: SearchFilters[], origQuery: string): SearchFilters {
    const result = { query: origQuery } as SearchFilters;
    const codeSets: Set<string>[] = [];

    // because I don't want to write this all out exactly the same six times
    const filterKeys = [ 'claims', 'grades', 'resourceTypes', 'standards', 'subjects', 'targets' ];

    for (const key of filterKeys) {
      result[key] = [];
      codeSets[key] = new Set<string>();  // we're going to use sets to speed up the deduping
    }

    // This looks O(n^3) but it's actually O(n) with n = the total # number of
    // filter values across returned resources.
    for (const filters of filtersList) {        // loop over our sets of filters
      for (const key of filterKeys) {           // for every type of filter (claims, grades, etc.)
        for (const value of filters[key]) {     // look at every filter value from the resource
          if (!codeSets[key].has(value.code)) { // if we haven't seen this value before
            result[key].push(value);            // add it to our final result set
            codeSets[key].add(value.code);      // and mark that we've seen it
          }
        }
      }
    }

    return result;
  }

  /**
   * Note that this mutates the filters in place.
   */
  private sortFilters(filters: SearchFilters) {

    // Sort the filters. Here we will need to have logic specific to each
    // filter type.
    const sortOnCode = (a, b) => {
      return a.code > b.code ? 1 :
             a.code < b.code ? -1 :
             0;
    };

    const typesOrder = ['ir', 'cp', 'pl', 'fs', 'as'];

    filters.grades.sort((a, b) => +a.code.substring(1) - +b.code.substring(1));
    filters.subjects.sort(sortOnCode);
    filters.claims.sort(sortOnCode);
    filters.targets.sort(sortOnCode);
    filters.standards.sort(sortOnCode);
    filters.resourceTypes = typesOrder
      .map(sortedCode => filters.resourceTypes.find(f => f.code === sortedCode))
      .filter(f => f);

    return filters;
  }

  public paramsToRequestModel(params: any): SearchRequestModel {
    return {
      Search_Text: params.query || '',
      Claim: this.splitToArray(params.claims),
      Grade: this.splitToArray(params.grades),
      Standard: this.splitToArray(params.standards),
      Subject: this.splitToArray(params.subjects),
      Target: this.splitToArray(params.targets),
      Resource_Type: this.splitToArray(params.resourceTypes)
    };
  }

  private splitToArray(param: string) {
    return param ? param.split(',') : [];
  }
}

interface BumpySearchResults {
  results: ResourceSummary[][];
  filters: SearchFilters[][];
}
