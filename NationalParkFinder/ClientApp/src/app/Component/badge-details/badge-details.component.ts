import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Badges } from 'src/app/Model/badges';
import { UserProfile } from 'src/app/Model/user-profile';
import { BadgesService } from 'src/app/Service/badges.service';
import { UserProfileService } from 'src/app/Service/user-profile.service';

@Component({
  selector: 'app-badge-details',
  templateUrl: './badge-details.component.html',
  styleUrls: ['./badge-details.component.css'],
})
export class BadgeDetailsComponent implements OnInit {
  constructor(
    private badgesService: BadgesService,
    private userService: UserProfileService,
    private authService: SocialAuthService,
    private router: Router
  ) {}

  newUser: UserProfile = {} as UserProfile;
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  userBadges: Badges[]= [];
  nonExistentBadges:number = 10;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
    if (this.loggedIn == false) {
      this.router.navigate(['']);
    }
    this.userService
      .getUserProfile(this.user.id)
      .subscribe((response: UserProfile) => {
        console.log(response);
        this.newUser = response;
        this.badgesService.getUserBadges(this.newUser.id).subscribe((response:Badges[])=>{
          console.log(response);
          this.userBadges = response;
        })
      });
  }
}
