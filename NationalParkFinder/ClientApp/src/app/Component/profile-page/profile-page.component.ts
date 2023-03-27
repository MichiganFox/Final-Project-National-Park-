import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/Model/user-profile';
import { UserProfileService } from 'src/app/Service/user-profile.service';
import { NavMenuComponent } from 'src/app/nav-menu/nav-menu.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  constructor(
    private userService: UserProfileService,
    private authService: SocialAuthService,
    private router:Router,
  ) {}

  newUser: UserProfile = {} as UserProfile;

  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
    if(this.loggedIn == false){
      this.router.navigate(['']);
    }
    this.userService
      .getUserProfile(this.user.id)
      .subscribe((response: UserProfile) => {
        console.log(response);
        this.newUser =response;
      });
  }

display1: boolean = true;
display2: boolean = false;
display3: boolean = false;
display4: boolean = false;
display5: boolean = false;

  toggleDisplay1(): void {
    this.display1 = !this.display1;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
  }
  
  toggleDisplay2(): void {
    this.display2 = !this.display2;
    this.display1 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
  }
 
  toggleDisplay3(): void {
    this.display1 = false;
    this.display2 = false;
    this.display3 = !this.display3;
    this.display4 = false;
    this.display5 = false;
  }

  toggleDisplay4(): void {
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = !this.display4;
    this.display5 = false;
  }

  toggleDisplay5(): void {
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = !this.display5;
  }
  
}
