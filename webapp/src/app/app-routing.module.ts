import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent, OktaLoginRedirectComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { AppContainerComponent } from './layout/app-container/app-container.component';
import { ResourceTypeStrategyComponent } from './resource/resource-type-strategy.component';
import { ResourceResolve } from './resource/resource.resolve';
import { NotesResolve } from './notes/notes.resolve';
import { BookmarkListComponent } from './bookmarks/bookmark-list/bookmark-list.component';
import { BookmarksResolve } from './bookmarks/bookmarks.resolve';
import { PromotedResourcesResolve } from './home/promoted-resources.resolve';
import { ResultsComponent } from './search/results/results.component';
import { ResourceResultResolve } from './search/results/resource-results.resolve';
import { SearchFiltersResolve } from './search/search-filters.resolve';
import { ErrorComponent } from './layout/error/error.component';
import { ERROR_PATH, OKTA_CALLBACK_PATH } from './common/constants';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    // resolve: { currentUser: CurrentUserResolve },
    children: [
      {
        path: '',
        component: HomeComponent,
        resolve: {
          filters: SearchFiltersResolve,
          promotedResources: PromotedResourcesResolve
        }
      }, {
        path: 'bookmarks',
        component: BookmarkListComponent,
        resolve: { bookmarks: BookmarksResolve }
      }, {
        path: 'resource/:resourceId',
        component: ResourceTypeStrategyComponent,
        resolve: {
          resource: ResourceResolve,
          notes: NotesResolve
        }
      }, {
        path: 'results',
        component: ResultsComponent,
        resolve: { results: ResourceResultResolve }
      }, {
        path: 'auth/login',
        component: OktaLoginRedirectComponent
      }, {
        path: OKTA_CALLBACK_PATH,
        component: OktaCallbackComponent
      }, {
        path: ERROR_PATH,
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
