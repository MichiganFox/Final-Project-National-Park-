import { Component, Input, OnInit } from '@angular/core';
import { Datum } from 'src/app/Model/park';
import { UserProfile } from 'src/app/Model/user-profile';
import { FavoritesService } from 'src/app/Service/favorites.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  @Input() userProfile:UserProfile = {} as UserProfile;
  constructor(private favoriteService:FavoritesService) { }
  result:Datum[]=[]
  ngOnInit(): void {
    this.getFavorites(this.userProfile.id);
  }

  getFavorites(id:number):void{
    this.favoriteService.getFavorites(id).subscribe((response:Datum[])=>{
      console.log(response);
      this.result = response;
    });
  }
}
