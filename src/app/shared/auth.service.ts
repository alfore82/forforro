import { UserCredentials } from "app/shared/objects/user.credentials";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';





@Injectable()
export class AuthService {

    user: Observable<firebase.User>

    constructor(private router:Router, private afAuth:AngularFireAuth){
        this.user = afAuth.authState;

    }

    signupUser(userCredentials: UserCredentials, callback: any){
        

        return firebase.auth().createUserWithEmailAndPassword(
            userCredentials.email, userCredentials.password).then(()=>callback()).catch(function(error){
                console.log(error);
            });
    }

    signinUser(userCredentials: UserCredentials){
        return this.afAuth.auth.signInWithEmailAndPassword(userCredentials.email,
            userCredentials.password);
    }

    signoutUser(){
        this.router['/'];
        this.afAuth.auth.signOut();
    }

    isAuthenticated() {
        const state = new Subject<boolean>();
        this.user.subscribe(user=>{
            if (user){
                state.next(true);
            }
            else {
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