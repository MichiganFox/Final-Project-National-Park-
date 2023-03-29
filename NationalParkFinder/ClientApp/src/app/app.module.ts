import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { ParkFinderComponent } from './Component/park-finder/park-finder.component';
import { ParkFinderFormComponent } from './Component/park-finder-form/park-finder-form.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { AllAdventuresComponent } from './Component/all-adventures/all-adventures.component';
import { SingleAdventureComponent } from './Component/single-adventure/single-adventure.component';
import { SingleFavoriteComponent } from './Component/single-favorite/single-favorite.component';
import { AlertsComponent } from './Component/alerts/alerts.component';
import { SingleAlertComponent } from './Component/single-alert/single-alert.component';
import { BadgesComponent } from './Component/badges/badges.component';
import { SingleBadgesComponent } from './Component/single-badges/single-badges.component';
import { ProfileCreatorComponent } from './Component/profile-creator/profile-creator.component';
import { ProfileFormComponent } from './Component/profile-form/profile-form.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { Secret } from './secret';
import { ListOfResultsComponent } from './Component/list-of-results/list-of-results.component';
import { SingleResultComponent } from './Component/single-result/single-result.component';
import { AdventureFormComponent } from './Component/adventure-form/adventure-form.component';
import { WatchlistComponent } from './Component/watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ParkFinderComponent,
    ParkFinderFormComponent,
    ProfilePageComponent,
    AllAdventuresComponent,
    SingleAdventureComponent,
    SingleFavoriteComponent,
    AlertsComponent,
    SingleAlertComponent,
    BadgesComponent,
    SingleBadgesComponent,
    ProfileCreatorComponent,
    ProfileFormComponent,
    ListOfResultsComponent,
    SingleResultComponent,
    AdventureFormComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, 
    SocialLoginModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {path: 'profileForm', component: ProfileFormComponent},
      {path: 'park', component: ParkFinderComponent},
      {path: 'profilePage', component: ProfilePageComponent},
      {path: 'home', component: HomeComponent}
    ])
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
            Secret.clientId 
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
