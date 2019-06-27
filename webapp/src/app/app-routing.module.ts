import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from './layout/app-container/app-container.component';
import { HomeComponent } from './home/home.component';
import { CurrentUserResolve } from './layout/current-user.resolve';
import { ResourceResolve } from './resource/resource.resolve';
import { ResourceTypeStrategyComponent } from './resource/resource-type-strategy.component';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    resolve: { currentUser: CurrentUserResolve },
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
