import {Routes, RouterModule} from "@angular/router"

import {ProfileComponent} from "./usermanagement/profile/profile.component";
import {SigninComponent} from "app/usermanagement/signin/signin.component";
import {LoginComponent} from "app/usermanagement/login/login.component";
import {HomeComponent} from "app/home/home.component"
import { UserSiteComponent } from "app/user-site/user-site.component";

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'user-site', component: UserSiteComponent},
    {path: 'user', component: ProfileComponent},
    {path: 'signup', component: SigninComponent},
    {path: 'login', component: LoginComponent}
    
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
