import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppContainerComponent } from './layout/app-container/app-container.component';
import { ResourceTypeStrategyComponent } from './resource/resource-type-strategy.component';
import { ResourceResolve } from './resource/resource.resolve';

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
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
