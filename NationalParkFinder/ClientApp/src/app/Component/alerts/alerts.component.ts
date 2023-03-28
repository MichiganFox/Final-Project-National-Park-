import { Component, Input } from '@angular/core';
import { Datum } from 'src/app/Model/park';
import { UserProfile } from 'src/app/Model/user-profile';
import { FavoritesService } from 'src/app/Service/favorites.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

@Input() userProfile: UserProfile = {} as UserProfile;

constructor (private favoriteService : FavoritesService){}
results: Datum[]=[];
ngOnInit() : void{
 this.getAlerts()
}
  getAlerts():void{
    this.favoriteService.getFavorites(this.userProfile.id).subscribe((response: Datum[])=>
{
console.log(response);
this.results=response;
});
  }
}
