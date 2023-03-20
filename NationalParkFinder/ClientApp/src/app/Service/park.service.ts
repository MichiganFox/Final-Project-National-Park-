import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Park } from '../Model/park';


@Injectable({
  providedIn: 'root'
})
export class ParkService {

  constructor(@Inject('Base_URL') private baseUrl:string, private http:HttpClient ) { }

  getParks():Observable<Park[]>{
    return this.http.get<Park[]>(`${this.baseUrl}api/Park/getParks`);
   
  }

   getParksByName(parkName: string):Observable<Park[]>{
    return this.http.get<Park[]>(`${this.baseUrl}api/Park/getParksByName?_parkName=${parkName}`);
   }

   getParksByActivities(allResults: string):Observable<Park[]>{
    return this.http.get<Park[]>(`${this.baseUrl}api/Park/getParksByActivities?_allResults=${allResults}`);
   }
   
  }
