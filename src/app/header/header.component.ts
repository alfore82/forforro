import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isCollapsed: boolean = true;
    isIn:boolean = false;
    
    isOpenEvents:boolean = false;
    isOpenPeople:boolean = false;
    isOpenLogin:boolean = false;

    isAuthenticated = false;
    
  constructor(private authService: AuthService) {
      this.authService.isAuthenticated().subscribe(authstatus => this.isAuthenticated = authstatus);
   }

  ngOnInit() {
  }


    onClickToggleButton(){
        if (this.isCollapsed){
            this.isCollapsed = false;
        } else {
            this.isCollapsed = true;
        }
        
        if (this.isIn){
            this.isIn = false;
        } else {
            this.isIn = true;
        }
        
    }
    
    onClickEvents(){
        this.isOpenEvents = !this.isOpenEvents;
        
    }
    
    onClickPeople(){
        this.isOpenPeople = !this.isOpenPeople;
        
    }
    
    onClickLogin(){
        this.isOpenLogin = !this.isOpenLogin;
        
    }
    
    closeEvents(){
        this.isOpenEvents=false;
    }
    
    closePeople(){
        this.isOpenPeople=false;
        
    }
    
    closeLogin(){
        this.isOpenLogin=false;
    }
    
    onLogout(){
        this.authService.signoutUser();
    }
}
