import { Component, Input, OnInit } from '@angular/core';
import { Favorites } from 'src/app/Model/favorites';
import { Datum, Park } from 'src/app/Model/park';
import { UserProfile } from 'src/app/Model/user-profile';
import { FavoritesService } from 'src/app/Service/favorites.service';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {
  @Input() singleResult:Datum = {} as Datum;
  @Input() userProfile:UserProfile= {} as UserProfile;
  @Input() i:number = {} as number;

  constructor(private favoriteService:FavoritesService) { }

  singleFavorite: Favorites = {} as Favorites;
  isFavorited:boolean = false;
  display:boolean=false;

  addToFavorites(){
    this.isFavorited = true;
    this.singleFavorite.userId = this.userProfile.id;
    this.singleFavorite.parkId = this.singleResult.id;
    this.favoriteService.addFavorite(this.singleFavorite).subscribe((response:Favorites)=>{
      console.log(response);
    })
  }

  removeFavorite(){
    this.isFavorited = false;
    this.singleFavorite.userId = this.userProfile.id;
    this.singleFavorite.parkId = this.singleResult.id;
    this.favoriteService.removeFavorite(this.singleFavorite).subscribe((response:Favorites)=>{
      console.log(response);
    })
  }

  checkIfFavorite(){
    this.singleFavorite.userId = this.userProfile.id;
    this.singleFavorite.parkId = this.singleResult.id;
    this.favoriteService.checkFavorite(this.singleFavorite).subscribe((response:boolean)=>{
      console.log(response);
      this.isFavorited=response;
    })
  }
  ngOnInit(): void {
    if(this.userProfile.id != null){
      this.checkIfFavorite();
      this.display=true;
    }
    
    

  }
  getPicture():string{
    if (this.singleResult.images.length==0){
      return "";
    } else{
      return this.singleResult.images[0].url;
    }
  }

}
