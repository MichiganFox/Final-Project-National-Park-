import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdventureLogService {

  constructor(@Inject('Base_URL') private baseUrl:string, private http:HttpClient ) { }

  GetAdventureLogs(newFavorite:Favorites):Observable<Favorites>{
    return this.http.post<Favorites>(`${this.baseUrl}api/favorite/addFavorite?_userQID=${newFavorite.qid}&_userName=${newFavorite.userId}`,{});
  }
}
