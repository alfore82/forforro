import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AuthService } from "app/shared/auth.service";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { UserProfileWrapper } from "app/shared/objects/user.profile.wrapper";




@Injectable()
export class UserService {
    
    user: FirebaseObjectObservable<any>
    constructor(db: AngularFireDatabase) {
        this.user = db.object('/userdetails');
     }

    storeData(userProfile: any){
        console.log(userProfile);
        this.user.set(userProfile).then(()=>console.log('set'));
       
    }

    fetchData(){

    }
}
