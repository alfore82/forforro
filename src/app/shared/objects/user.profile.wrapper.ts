import { UserProfile } from "app/shared/objects/user.profile";

export class UserProfileWrapper {

    uid: string;
    userProfile: UserProfile;

    constructor(uid?: string, userProfile?:UserProfile){
        this.uid = uid;
        this.userProfile = userProfile;

    };

    toJSONObject(){
        var wrapper ={ }
        var profile = { }
        profile['name']=this.userProfile.name;
        profile['surname']=this.userProfile.surname;
        profile['username']=this.userProfile.username;
        profile['imageURL']=this.userProfile.imageURL;
        wrapper[this.uid]=profile;


        return wrapper;


    }





}