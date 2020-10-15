import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import { catchError, flatMap, mergeAll, map, take, tap, toArray } from 'rxjs/operators';
import { coalesce } from 'src/app/common/utils';
import { DataService } from '../data.service';
import { UserService } from '../user/user.service';
import { ResourceType } from './model/resource-type.enum';
import { Resource } from './model/resource.model';
import { ResourceSummary } from './model/summary.model';
import { ResourceProperties } from './model/properties.model';
import { ResourceAttachment, getFileTypeForMimeType } from './model/attachment.model';
import { InstructionalResource } from './model/instructional.model';
import { AccessibilityStrategyResource } from './model/accessibility-strategy.model';
import { FormativeStrategyResource } from './model/formative-strategy.model';
import { ProfessionalLearningResource } from './model/professional-learning.model';
import { EmbedStrategyLinksService } from './embed-strategy-links.service';
import { Bookmark } from '../bookmarks/bookmark.model';
import { teaserIRContent, teaserFAContent, teaserASContent, teaserPLContent, teaserCPContent } from 'src/app/data/mock-data';
import { TftErrorService } from 'src/app/common/tft-error.service';
import { TftErrorType } from 'src/app/common/tft-error-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  // TODO: Define how assessment types are defined.  How will this be represented?
  // TODO: Define all assessment type icons.
  readonly assessmentTypeToIconMap: Map<number, string> = new Map([
    [ 1, 'asmt-math-6-7-the-number-system' ],
    [ 2, 'asmt-ela-summative' ],
    [ 3, 'asmt-ela-research' ],
    [ 4, 'asmt-ela-read-informational-texts' ],
  ]);

  private resourcePageFooter$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private dataService: DataService,
    private location: Location,
    private embedStrategyLinkService: EmbedStrategyLinksService,
    private errorService: TftErrorService,
    private userService: UserService
  ) {}

  get = (id: number): Observable<Resource> => {
    return this.dataService
      .get(`/api/resource/${id}`)
      .pipe(
        map(this.resourceFromJson),
        map(this.embedStrategyLinks),
        catchError(this.handleResourceError)
      );
  }

  getResourceSummariesForBookmarks = (bookmarks: Observable<Bookmark[]> | Bookmark[]): Observable<ResourceSummary[]> => {
    const obs: Observable<Bookmark[]> = bookmarks instanceof Observable ? bookmarks : of(bookmarks);
    return obs.pipe(
      mergeAll(),
      flatMap(bookmark => this.dataService.get(`/api/resource/${bookmark.resourceId}`)),
      map(this.resourceSummaryFromJson),
      toArray());
  }

  getResourceSummariesForIds = (ids: Observable<number[]> | number[]): Observable<ResourceSummary[]> => {
    const obs: Observable<number[]> = ids instanceof Observable ? ids : of(ids);
    return obs.pipe(
      mergeAll(),
      flatMap(id => this.dataService.get(`/api/resource/${id}`)),
      map(this.resourceSummaryFromJson),
      toArray());
  }

  private handleResourceError = (error: any): Observable<never> => {
    // TODO: API should return more information that we can use to error
    // appropriately.
    let errorType = TftErrorType.Unknown;

    this.userService.user.pipe(take(1)).subscribe(user => {
      if (error.status === 401) {
        if (user) {
          errorType = TftErrorType.ResourceIsTenantSpecific;
        } else {
          errorType = TftErrorType.ResourceIsPrivate;
        }
      } else {
        errorType = TftErrorType.ResourceUnavailable;
      }

      this.errorService.redirectTftError({ type: errorType, details: error.error });
    });

    return throwError(error);
  }

  private resourceFromJson = (resourceJson: any): Resource => {
    const resourceType = resourceJson.type as ResourceType;

    if (!Object.values(ResourceType).includes(resourceType)) {
      throw Error('Unrecognized resource type: ' + resourceJson.type);
    }

    const properties = this.resourcePropertiesFromJson(resourceJson.properties);

    // If we're looking at teaser previews, bail out early and fill in the body
    // content with filler.
    if (resourceJson.teaser) {
      const teaserResource = this.generateTeaser(resourceType, properties, resourceJson);
      return teaserResource;
    }

    // Our model objects should match the data models being returned from the
    // API, so all we really need to do is map types that are not representable
    // in JSON alone (Dates, enums, etc).

    return {
      ...resourceJson,
      properties,
      attachments: this.attachmentsFromJson(resourceJson.attachments),
      type: resourceType
    } as Resource;  // TODO: would be good to have some actual validation of this

  }

  private attachmentsFromJson(attachmentsJson): ResourceAttachment[] {
    if (!attachmentsJson) { return []; }

    return attachmentsJson.map(a => ({
      ...a,
      fileType: getFileTypeForMimeType(a.fileType),
      mimeType: a.fileType
    }));
  }

  private resourcePropertiesFromJson(propertiesJson: any): ResourceProperties {
    return {
      ...propertiesJson,
      lastUpdatedDate: new Date(propertiesJson.lastUpdatedDate)
    };
  }

  private resourceSummaryFromJson = (resourceJson: any): ResourceSummary => {
    const resourceType = resourceJson.type as ResourceType;

    if (!Object.values(ResourceType).includes(resourceType)) {
      throw Error('Unrecognized resource type: ' + resourceJson.type);
    }

    // Our model objects should match the data models being returned from the
    // API, so all we really need to do is map types that are not representable
    // in JSON alone (Dates, enums, etc).

    return {
      id: resourceJson.id,
      properties: this.resourcePropertiesFromJson(resourceJson.properties),
      type: resourceType,
      summary: this.summaryFromJson(resourceType, resourceJson)
    } as ResourceSummary;  // TODO: would be good to have some actual validation of this
  }

  private summaryFromJson(resType: ResourceType, json: any): string {
    switch (resType) {
      case ResourceType.Instructional:
        return json.getStarted.overview;
      default:
      case ResourceType.ProfessionalLearning:
      case ResourceType.AccessibilityStrategy:
      case ResourceType.FormativeStrategy:
        return json.overview.overview;
      case ResourceType.ConnectionsPlaylist:
        return json.overview.description;
    }
  }

  private embedStrategyLinks = (res: Resource) => {

    if (res.teaser) { return res; }

    // We're going to call this a lot, so let's shorthand it
    const embed = this.embedStrategyLinkService.embedStrategyLinks;

    // Fields common to both

    if (res.type === ResourceType.Instructional) {

      const ir = res as InstructionalResource;
      ir.thingsToConsider = embed(ir.thingsToConsider, ir);
      ir.stepByStep.forEach(step => step.content = embed(step.content, ir));
      ir.getStarted.overview = embed(ir.getStarted.overview, ir);
      ir.getStarted.learningGoal = embed(ir.getStarted.learningGoal, ir);
      ir.getStarted.successCriteria = embed(ir.getStarted.successCriteria, ir);

      ir.differentiation = embed(ir.differentiation, ir);

      ir.formativeAssessHowTo.clarify = embed(ir.formativeAssessHowTo.clarify, ir);
      ir.formativeAssessHowTo.elicit = embed(ir.formativeAssessHowTo.elicit, ir);
      ir.formativeAssessHowTo.interpret = embed(ir.formativeAssessHowTo.interpret, ir);
      ir.formativeAssessHowTo.act = embed(ir.formativeAssessHowTo.act, ir);

    } else if (res.type === ResourceType.ProfessionalLearning) {

      const pl = res as ProfessionalLearningResource;
      pl.thingsToConsider = embed(pl.thingsToConsider, pl);
      pl.stepByStep.forEach(step => step.content = embed(step.content, pl));
      pl.overview.overview = embed(pl.overview.overview, pl);
      pl.overview.learningGoal = embed(pl.overview.learningGoal, pl);
      pl.overview.successCriteria = embed(pl.overview.successCriteria, pl);

    }

    return res;
  }

  private generateTeaser(resType: ResourceType, properties: ResourceProperties, resourceJson: any): Resource {
    switch (resType) {
      default:
      case ResourceType.Instructional: return this.fillOutIRContent(properties, resourceJson);
      case ResourceType.FormativeStrategy: return this.fillOutFAContent(properties, resourceJson);
      case ResourceType.AccessibilityStrategy: return this.fillOutASContent(properties, resourceJson);
      case ResourceType.ProfessionalLearning: return this.fillOutPLContent(properties, resourceJson);
      case ResourceType.ConnectionsPlaylist: return this.fillOutCPContent(properties, resourceJson);
    }
  }

  private fillOutIRContent(properties: ResourceProperties, json: any): InstructionalResource {
    return {
      ...json,
      properties,
      attachments: json.attachmentsExist ? teaserIRContent.attachments : [],
      stepByStep: json.teaseStepByStep.map(s => ({...s, content: teaserIRContent.stepByStep[0].content})),
      accessibilityStrategies: teaserIRContent.accessibilityStrategies,
      formativeAssessmentStrategies: teaserIRContent.formativeAssessmentStrategies,
      formativeAssessHowTo: json.formativeAssessHowToExist ? teaserIRContent.formativeAssessHowTo : null,
      differentiation: '',
      thingsToConsider: json.thingsToConsiderExist ? teaserIRContent.thingsToConsider : null
    };
  }

  private fillOutFAContent(properties: ResourceProperties, json: any): FormativeStrategyResource {
    return {
      ...json,
      properties,
      attachments: json.attachmentsExist ? teaserFAContent.attachments : [],
      thingsToConsider: json.thingsToConsiderExist ? teaserFAContent.thingsToConsider : null,
      stepByStep: teaserFAContent.stepByStep,
      strategyInAction: json.strategyInActionExist ? teaserFAContent.strategyInAction : null,
    };
  }

  private fillOutASContent(properties: ResourceProperties, json: any): FormativeStrategyResource {
    return {
      ...json,
      properties,
      attachments: json.attachmentsExist ? teaserASContent.attachments : [],
      thingsToConsider: json.thingsToConsiderExist ? teaserASContent.thingsToConsider : null,
      sampleItemContent: teaserASContent.sampleItemContent,
    };
  }

  private fillOutPLContent(properties: ResourceProperties, json: any): FormativeStrategyResource {
    return {
      ...json,
      properties,
      attachments: json.attachmentsExist ? teaserPLContent.attachments : [],
      thingsToConsider: json.thingsToConsiderExist ? teaserPLContent.thingsToConsider : null,
      stepByStep: json.teaseStepByStep.map(s => ({...s, content: teaserPLContent.stepByStep[0].content})),
      formativeAssessmentStrategies: teaserPLContent.formativeAssessmentStrategies,
    };
  }

  private fillOutCPContent(properties: ResourceProperties, json: any): FormativeStrategyResource {
    return {
      ...json,
      properties,
      attachments: json.attachmentsExist ? teaserCPContent.attachments : [],
      thingsToConsider: json.thingsToConsiderExist ? teaserCPContent.thingsToConsider : null,
      topics: teaserCPContent.topics
    };
  }

  onResourceFooterView(isOnResourcePage: boolean) {
    this.resourcePageFooter$.next(isOnResourcePage);
  }

  get resourcePageFooter(): Observable<boolean> {
    return this.resourcePageFooter$.asObservable();
  }

}
