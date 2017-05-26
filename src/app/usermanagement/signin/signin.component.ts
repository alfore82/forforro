import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/auth.service";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { UserCredentials } from "app/shared/objects/user.credentials";
import { UserService } from "app/shared/user.service";
import { UserProfile } from "app/shared/objects/user.profile";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signupForm: FormGroup;


  constructor(private authService: AuthService, private userSerice: UserService) { }

  ngOnInit(  ) {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'usercredentials': new FormGroup({
          'email': new FormControl(null, [Validators.required, 
                      Validators.email]),
          'password': new FormControl(null, [Validators.required,
                      Validators.minLength(8)]),
          'passwordconfirm': new FormControl(null, Validators.required)
      },this.passwordConfirmValidator)
    });
  }

  onSubmit(){
    var myUserCredentials: UserCredentials = new UserCredentials(
        this.signupForm.get(['usercredentials','email']).value,
        this.signupForm.get(['usercredentials','password']).value);
    this.authService.signupUser(myUserCredentials,()=>{
      var userProfile: UserProfile = new UserProfile();
      userProfile.name =this.signupForm.get('name').value;
      userProfile.surname =this.signupForm.get('surname').value;
      userProfile.username =this.signupForm.get('username').value;
      userProfile.uid = this.authService.getUserId();
      this.userSerice.storeData(userProfile);
    });
    
    

  }

  passwordConfirmValidator(control: AbstractControl): {[s: string]: boolean}{
    let password = control.get('password').value;

    let confirmPassword = control.get('passwordconfirm').value;
    if(password !== confirmPassword) {
            return {matchPassword: true}
        } else {
            return null
        }
  }

  emailFreeValidator(control: FormControl): {[s: string]: boolean}{
    if (this.signupForm.get(['usercredentials','email']).valid){
        var myUserCredentials: UserCredentials = new UserCredentials(
        this.signupForm.get(['usercredentials','email']).value,
        this.signupForm.get(['usercredentials','email']).value);
        
    }
    return null;

  }

}
