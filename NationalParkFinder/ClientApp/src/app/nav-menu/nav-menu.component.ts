import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilePageComponent } from '../Component/profile-page/profile-page.component';
import { Datum } from '../Model/park';
import { UserProfile } from '../Model/user-profile';
import { ParkService } from '../Service/park.service';
import { UserProfileService } from '../Service/user-profile.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  constructor(
    private authService: SocialAuthService,
    private userService: UserProfileService,
    private router:Router,
    private parkService:ParkService,
  ) {}
  newUser: UserProfile = {} as UserProfile;
  

  signOut(): void {
    this.authService.signOut();
    this.router.navigate([''])
  }

  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  userProfile: UserProfile = {} as UserProfile;
  loading:boolean = true;

  ngOnInit(): void {
    this.parkService.getParksAPI().subscribe((response:Datum[])=>{
      console.log(response)
      this.loading = false;
    })
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      this.signIn();
      this.router.navigate(['/profilePage']);
    });
    
  }
 
  signIn() {
    this.newUser.googleId = this.user.id;
    this.newUser.userName = this.user.firstName
    this.userService
      .createUserProfile(this.newUser)
      .subscribe((response: UserProfile) => {
        console.log(response);
      });
    this.userService
      .getUserProfile(this.user.id)
      .subscribe((response: UserProfile) => {
        console.log(response);
        this.newUser =response;
      });
  }

  
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
