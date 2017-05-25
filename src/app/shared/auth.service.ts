import { UserCredentials } from "app/shared/objects/user.credentials";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { AppSettings } from "app/shared/firebase.app.data";



@Injectable()
export class AuthService {

    constructor(private router:Router){
        firebase.initializeApp(AppSettings.configFirebase);
        

    }

    signupUser(userCredentials: UserCredentials, callback: any){
        return firebase.auth().createUserWithEmailAndPassword(
            userCredentials.email, userCredentials.password).then(()=>callback()).catch(function(error){
                console.log(error);
            });
    }

    signinUser(userCredentials: UserCredentials){
        firebase.auth().signInWithEmailAndPassword(userCredentials.email,
            userCredentials.password).then(()=>{
                console.log(firebase.auth().currentUser.uid);
            }).catch(function(error){
                console.log(error);
            });
    }

    signoutUser(){
        firebase.auth().signOut();
        this.router['/'];
    }

    isAuthenticated() {
        const state = new Subject<boolean>();
        firebase.auth().onAuthStateChanged(function(user){
            if (user){
                state.next(true);
            } else {
                state.next(false);
            }
        });
        return state.asObservable();
    }

    checkEmailInUse(userCredentials: UserCredentials){
        firebase.auth().fetchProvidersForEmail(userCredentials.email);
    }

    getUserId() :string{
        return firebase.auth().currentUser.uid;
    }
}