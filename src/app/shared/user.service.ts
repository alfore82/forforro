import { UserProfile } from "app/shared/objects/user.profile";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AuthService } from "app/shared/auth.service";
import { AppSettings } from "app/shared/firebase.app.data";




@Injectable()
export class UserService {
    
    
    constructor(private http:Http, private authService:AuthService) { }

    storeData(userProfile: UserProfile){
        const body = JSON.stringify(userProfile);
        const headers = new Headers(
            {
                'Content-Type': 'application/jsn',
                'Authorization': 'Bearer '+ userProfile.uid});
        return this.http.put(AppSettings.databaseURL +'userprofiles.json',body,{headers: headers});
    }

    fetchData(){

    }
}
