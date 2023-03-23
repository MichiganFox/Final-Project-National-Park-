import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdventureLog } from '../Model/adventure-log';
import { Favorites } from '../Model/favorites';

@Injectable({
  providedIn: 'root'
})
export class AdventureLogService {

  constructor(@Inject('BASE_URL') private baseUrl:string, private http:HttpClient ) { }

   GetAdventureLogs(userId: number):Observable<AdventureLog[]>{
    return this.http.get<AdventureLog[]>(`${this.baseUrl}api/AdventureLog/getAdventureLog?_userId=${userId}`);
  } 

  NewEntry(newEntry: AdventureLog):Observable<AdventureLog>{
    return this.http.post<AdventureLog>(`${this.baseUrl}api/AdventureLog/newEntry?_parkId=${newEntry.parkId}&_details=${newEntry.details}&_userId=${newEntry.userId}&_rating=${newEntry.rating}&_title=${newEntry.title}`,{});
    
  }

  ChangeEntry(changeEntry: AdventureLog):Observable<AdventureLog>{
    return this.http.put<AdventureLog>(`${this.baseUrl}api/AdventureLog/changeEntry?_id=${changeEntry.id}&_details=${changeEntry.details}&_rating=${changeEntry.rating}&_title=${changeEntry.title}`,{});
  }

  DeleteItem(deleteItem: AdventureLog) : Observable<AdventureLog>{
    return this.http.delete<AdventureLog>(`${this.baseUrl}api/AdventureLog/deleteItem?_id=${deleteItem.id}`);
  }
}
