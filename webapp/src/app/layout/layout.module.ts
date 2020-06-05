import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OktaAuthModule } from '@okta/okta-angular';
import { AppContainerComponent } from './app-container/app-container.component';
import { FooterComponent } from './footer/footer.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { LogoutComponent } from './logout/logout.component';
import { PipesModule } from '../pipes/pipes.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';
import { SbdlCommonModule } from '../common/common.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppContainerComponent,
    ErrorComponent,
    FooterComponent,
    LoginCallbackComponent,
    LogoutComponent,
    NavigationComponent
  ],
  imports: [
    OktaAuthModule,
    SbdlCommonModule,
    CommonModule,
    PipesModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutModule { }
