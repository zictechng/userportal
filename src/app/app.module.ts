import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ForgetPasswordPageComponent } from './components/forget-password-page/forget-password-page.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { SideBarComponent } from './components/dashboard/partials/side-bar/side-bar.component';
import { TopBarComponent } from './components/dashboard/partials/top-bar/top-bar.component';
import { FooterPageComponent } from './components/dashboard/partials/footer-page/footer-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ForgetPasswordPageComponent,

    HomeComponent,

     SideBarComponent,
      TopBarComponent,
      FooterPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
