import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorites } from '../Model/favorites';
import { Park } from '../Model/park';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  constructor(@Inject('BASE_URL') private baseUrl:string, private http:HttpClient ) { }

   getFavorites(userId: number):Observable<Park[]>{
    return this.http.get<Park[]>(`${this.baseUrl}api/Favorite/getFavorites?_userId=${userId}`);
  } 

  addFavorite(addFavorite: Favorites): Observable<Favorites>{
    return this.http.post<Favorites>(`${this.baseUrl}api/Favorite/addFavorites?_userId=${addFavorite.userId}&_parkId=${addFavorite.parkId}`, {});
  }

  removeFavorite(removeFavorite: Favorites): Observable<Favorites>{
    return this.http.delete<Favorites>(`${this.baseUrl}api/Favorite/removeFavorite?_userId=${removeFavorite.userId}&_parkId=${removeFavorite.parkId}`);
  }
}
