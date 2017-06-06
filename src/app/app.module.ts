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
import { UserService } from "app/shared/user.service";
import { environment } from "environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ListItemPartyComponent } from "app/listitem/list.item.party.component";
import { BasicNavigationComponent } from './basic-navigation/basic-navigation.component';
import { UserSiteComponent } from './user-site/user-site.component';
import { UserSiteTitleComponent } from './user-site-title/user-site-title.component';

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
    PictureComponent,
    ListItemPartyComponent,
    BasicNavigationComponent,
    UserSiteComponent,
    UserSiteTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
