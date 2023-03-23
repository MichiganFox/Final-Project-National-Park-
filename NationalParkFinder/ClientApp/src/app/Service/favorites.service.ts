import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorites } from '../Model/favorites';
import { Datum, Park } from '../Model/park';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  constructor(@Inject('BASE_URL') private baseUrl:string, private http:HttpClient ) { }

   getFavorites(userId: number):Observable<Datum[]>{
    return this.http.get<Datum[]>(`${this.baseUrl}api/Favorites/getFavorites?_userId=${userId}`);
  } 

  addFavorite(addFavorite: Favorites): Observable<Favorites>{
    return this.http.post<Favorites>(`${this.baseUrl}api/Favorites/addFavorite?_userId=${addFavorite.userId}&_parkId=${addFavorite.parkId}`, {});
  }

  removeFavorite(removeFavorite: Favorites): Observable<Favorites>{
    return this.http.delete<Favorites>(`${this.baseUrl}api/Favorites/removeFavorite?_userId=${removeFavorite.userId}&_parkId=${removeFavorite.parkId}`);
  }

  checkFavorite(favorite: Favorites): Observable<boolean>{
    return this.http.get<boolean>(`${this.baseUrl}api/Favorites/checkIfAFavorite?_userId=${favorite.userId}&_parkId=${favorite.parkId}`);
  }
}
