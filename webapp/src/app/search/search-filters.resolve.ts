import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/data/search/search.service';
import { SearchFilters, emptyFilters } from '../data/search/search-filters.model';

@Injectable({
    providedIn: 'root'
})
export class SearchFiltersResolve implements Resolve<SearchFilters> {
  constructor(private service: SearchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SearchFilters | Observable<SearchFilters> | Promise<SearchFilters> {
    const dummyFilters: SearchFilters = {
      freeText: '',
      resourceTypes: [
        { title: 'Instructional', code: 'ir' },
        { title: 'Professional Learning', code: 'pl' },
        { title: 'Connections Playlist', code: 'cp' },
        { title: 'Formative Assessment Strategy', code: 'fas' },
        { title: 'Accessibility Strategy', code: 'ac' }
      ],
      grades: [
        { title: 'Kindergarten', code: 'k' },
        { title: '2', code: '2' },
        { title: '3', code: '3' },
        { title: '4', code: '4' },
        { title: '5', code: '5' },
        { title: '6', code: '6' },
        { title: '7', code: '7' },
        { title: '8', code: '8' },
        { title: 'High School', code: 'hs' }
      ],
      subjects: [
        { title: 'Mathematics', code: 'math' },
        { title: 'English Language Arts', code: 'ela' }
      ],
      claims: [],
      targets: [],
      standards: [],
    };

    return dummyFilters;
  }
}
