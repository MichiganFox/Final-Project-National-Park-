import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/Service/user-profile.service';
import { UserProfile } from '../../Model/user-profile';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent {
  //@Output() submitted = new EventEmitter<UserProfile>();

  constructor(
    private userService: UserProfileService,
    private authService: SocialAuthService,
    private router:Router
  ) {}

  newUser: UserProfile = {} as UserProfile;

  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  updated:boolean = false;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      
    });
    if(this.loggedIn == false){
      this.router.navigate(['']);
    }
    this.getUserProfile();
  }
  

  updateProfile(): void {
    
    this.userService
    .updateUserProfile(this.newUser)
    .subscribe((result: UserProfile) => {
        console.log(result);
        this.getUserProfile();
        this.updated = true;
      });
      
  }

  getUserProfile():void{
    this.userService
      .getUserProfile(this.user.id)
      .subscribe((response: UserProfile) => {
        console.log(response);
        this.newUser = response;
      });
  }
}
