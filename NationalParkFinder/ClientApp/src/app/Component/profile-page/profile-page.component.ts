import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/Model/user-profile';
import { UserProfileService } from 'src/app/Service/user-profile.service';
import { NavMenuComponent } from 'src/app/nav-menu/nav-menu.component';
import { WatchlistComponent } from '../watchlist/watchlist.component';
import { BadgesComponent } from '../badges/badges.component';
import { ParkFinderComponent } from '../park-finder/park-finder.component';
import { AllAdventuresComponent } from '../all-adventures/all-adventures.component';
import { AlertsComponent } from '../alerts/alerts.component';

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
  @ViewChild(WatchlistComponent)watchList!:WatchlistComponent;
  @ViewChild(BadgesComponent)badges!:BadgesComponent;
  @ViewChild(AllAdventuresComponent)allAdventures!:AllAdventuresComponent;
  @ViewChild(AlertsComponent)alerts!:AlertsComponent;
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
        this.newUser = response;
        this.watchList.getFavorites(this.newUser.id);
       /*  this.badges.getBadges(this.newUser.id);
        this.allAdventures.getLogs(this.newUser.id);
        this.alerts.getAlerts(this.newUser.id); */

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
