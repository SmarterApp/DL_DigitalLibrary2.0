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
import { SearchResultsComponent } from './search/results/search-results.component';
import { SearchResultsResolve } from './search/results/search-results.resolve';
import { SearchFiltersResolve } from './search/search-filters.resolve';
import { ErrorComponent } from './layout/error/error.component';
import { LogoutComponent } from './layout/logout/logout.component';
import { ERROR_PATH, OKTA_CALLBACK_PATH } from './common/constants';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
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
        path: 'search',
        component: SearchResultsComponent,
        resolve: { results: SearchResultsResolve }
      }, {
        path: 'auth/login',
        component: OktaLoginRedirectComponent
      }, {
        path: 'auth/logout',
        component: LogoutComponent
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
