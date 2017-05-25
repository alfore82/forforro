import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './usermanagement/signin/signin.component';
import { ProfileComponent } from './usermanagement/profile/profile.component';
import { LoginComponent } from './usermanagement/login/login.component';
import { HomeComponent } from './home/home.component';
import { ROUTING } from './app.routing';
import { TextareaComponent } from './shared/textarea/textarea.component';
import { TablerowComponent } from './shared/tablerow/tablerow.component';
import { PictureComponent } from './shared/picture/picture.component'
import { AuthService } from "app/shared/auth.service";
import { AppSettings } from "app/shared/firebase.app.data";
import { UserService } from "app/shared/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    TextareaComponent,
    TablerowComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTING,
    
  ],
  providers: [AuthService, AppSettings, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
