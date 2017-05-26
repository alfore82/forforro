import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AuthService } from "app/shared/auth.service";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { UserProfile } from "app/shared/objects/user.profile";




@Injectable()
export class UserService {
    
    userList: FirebaseListObservable<any>
    constructor(db: AngularFireDatabase) {
        this.userList = db.list('/userdetails');
     }

    storeData(userProfile: UserProfile){
        console.log(userProfile);
        this.userList.push(userProfile).then(()=>console.log('added'));
       
    }

    fetchData(uid: string){

        return this.userList.map((userProfiles)=>{
            const filtered = userProfiles.filter((userProfile)=>{
                if (userProfile.uid === uid) {
                    return true;
                } else {
                    return false;
                }
            });
            return filtered;
        })
    }
}
