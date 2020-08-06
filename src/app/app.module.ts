import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {FooterComponent} from './pages/footer/footer.component';
import {RouterModule} from '@angular/router';
import {IconComponent} from './shared/icon/icon.component';
import {LoginComponent} from './pages/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {RegisterComponent} from './pages/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RegisterService} from './pages/register/register.service';
import {LoginService} from './pages/login/login.service';
import {HttpInterceptorService} from './services/security/http-interceptor.service';
import {AuthenticatedGuard} from './services/security/authenticated.guard';
import {NotAuthenticatedGuard} from './services/security/not-authenticated.guard';
import {InputComponent} from './shared/form/input/input.component';
import {InputErrorComponent} from './shared/form/input-error/input-error.component';
import {DashboardModule} from './pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IconComponent,
    LoginComponent,
    RegisterComponent,
    InputComponent,
    InputErrorComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService,
    LoginService,
    HttpInterceptorService,
    AuthenticatedGuard,
    NotAuthenticatedGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
