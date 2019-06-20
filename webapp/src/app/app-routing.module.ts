import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from './layout/app-container/app-container.component';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { CurrentUserResolve } from './layout/current-user.resolve';

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    resolve: {
      currentUser: CurrentUserResolve
    },
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'resource',
        component: ResourceComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
