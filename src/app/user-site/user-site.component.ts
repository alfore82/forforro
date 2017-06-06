import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-user-site',
  templateUrl: './user-site.component.html',
  styleUrls: ['./user-site.component.css']
})
export class UserSiteComponent implements OnInit {

 isCollapsed: boolean = true;
    isIn:boolean = false;
    
    isOpenEvents:boolean = false;
    isOpenPeople:boolean = false;
    isOpenLogin:boolean = false;
    isOpenTeachers:boolean = false;
    isOpenMedia:boolean = false;
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
  onClickTeachers(){
        this.isOpenTeachers = !this.isOpenTeachers;
        
    }
      closeTeachers(){
        this.isOpenTeachers=false;
    }
      onClickMedia(){
        this.isOpenMedia = !this.isOpenMedia;
    }
      closeMedia(){
        this.isOpenMedia=false;
    }
}
