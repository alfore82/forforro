import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserCredentials } from "app/shared/objects/user.credentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
          'email': new FormControl(null, [Validators.required, 
                      Validators.email]),
          'password': new FormControl(null, Validators.required)});
  }

  onSubmit(){
    var email: string = this.signinForm.get('email').value;
    var password: string = this.signinForm.get('password').value;

    this.authService.signinUser(new UserCredentials(email,password));
    
  };

  test(){
    this.authService.getUserId();
  }

}
