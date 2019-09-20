import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppContainerComponent } from './layout/app-container/app-container.component';
import { ResourceTypeStrategyComponent } from './resource/resource-type-strategy.component';
import { ResourceResolve } from './resource/resource.resolve';
import { ResultsComponent } from './search/results/results.component';
import { ResourceResultResolve } from './search/results/resource-results.resolve';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    // resolve: { currentUser: CurrentUserResolve },
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'resource/:resourceId',
        component: ResourceTypeStrategyComponent,
        resolve: { resource: ResourceResolve }
      }, {
        path: 'results',
        component: ResultsComponent,
        resolve: { results: ResourceResultResolve }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
