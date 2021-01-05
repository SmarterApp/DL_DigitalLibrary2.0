import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OktaAuthGuard, OktaLoginRedirectComponent} from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { AppContainerComponent } from './layout/app-container/app-container.component';
import { ResourceTypeStrategyComponent } from './resource/resource-type-strategy.component';
import { ResourceResolve } from './resource/resource.resolve';
import { NotesResolve } from './notes/notes.resolve';
import { BookmarkListComponent } from './bookmarks/bookmark-list/bookmark-list.component';
import { BookmarksResolve } from './bookmarks/bookmarks.resolve';
import { ResourcesWithNotesResolve } from './notes/resources-with-notes.resolve';
import { PromotedResourcesResolve } from './home/promoted-resources.resolve';
import { SearchResultsComponent } from './search/results/search-results.component';
import { SearchResultsResolve } from './search/results/search-results.resolve';
import { ErrorComponent } from './layout/error/error.component';
import { LoginCallbackComponent } from './layout/login-callback/login-callback.component';
import { LogoutComponent } from './layout/logout/logout.component';
import { ERROR_PATH, OKTA_CALLBACK_PATH } from './common/constants';
import { LoginComponent } from './layout/login/login.component';
import { PageNotFoundComponent } from './layout/error/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        resolve: {
          promotedResources: PromotedResourcesResolve
        }
      }, {
        path: 'bookmarks',
        component: BookmarkListComponent,
        resolve: {
          bookmarks: BookmarksResolve,
          idsOfResourcesWithNotes: ResourcesWithNotesResolve
        },
        canActivate: [ OktaAuthGuard ]
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
        component: LoginComponent
      }, {
        path: 'auth/logout',
        component: LogoutComponent
      }, {
        path: OKTA_CALLBACK_PATH,
        component: LoginCallbackComponent
      }, {
        path: ERROR_PATH,
        component: ErrorComponent
      }, {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
