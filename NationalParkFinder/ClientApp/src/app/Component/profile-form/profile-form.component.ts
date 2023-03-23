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

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      
    });
    if(this.loggedIn == false){
      this.router.navigate(['']);
    }
    this.signIn();
  }

  createUserProfile(): void {
    let result: UserProfile = {
      googleId: this.user.id,
      region: this.newUser.region,
      userName: this.newUser.userName,
      homeTown: this.newUser.homeTown,
      activities: this.newUser.activities,
      lodging: this.newUser.lodging,
      style: this.newUser.style,
      id: 0,
    };

    this.userService
      .createUserProfile(result)
      .subscribe((result: UserProfile) => {
        console.log(result);
      });
  }

  signIn() {
    this.newUser.googleId = this.user.id;
    this.userService
      .createUserProfile(this.newUser)
      .subscribe((response: UserProfile) => {
        console.log(response);
      });
    this.userService
      .getUserProfile(this.user.id)
      .subscribe((response: UserProfile) => {
        console.log(response);
      });
  }
}
