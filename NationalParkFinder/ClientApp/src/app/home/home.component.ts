import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, Input } from '@angular/core';
import { Datum } from '../Model/park';
import { UserProfile } from '../Model/user-profile';
import { ParkService } from '../Service/park.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private authService:SocialAuthService){}
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
 ngOnInit(){
  
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = user != null;
 
  });
 }
 getHoverMessage(){
  if (this.loggedIn){
    return "test"
  }
  else{
    return "Login to use Adventure Finder";
  }
 }
    
  }


