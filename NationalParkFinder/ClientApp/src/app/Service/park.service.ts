import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdventureLog } from '../Model/adventure-log';
import { Datum, Park } from '../Model/park';


@Injectable({
  providedIn: 'root'
})
export class ParkService {

  constructor(@Inject('BASE_URL') private baseUrl:string, private http:HttpClient ) { }

  getParks():Observable<Datum[]>{
    return this.http.get<Datum[]>(`${this.baseUrl}api/Park/getParks?limit=496`);
   
  }

   getParksByName(parkName: string):Observable<Datum[]>{
    return this.http.get<Datum[]>(`${this.baseUrl}api/Park/getParksByName?_parkName=${parkName}`);
   }

   getParksByActivities(activities: string, selectedStates: string):Observable<Datum[]>{
    return this.http.get<Datum[]>(`${this.baseUrl}api/Park/getParksByActivities?_allResults=${activities}&_selectedStates=${selectedStates}`);
   }
   
   getParksAPI():Observable<Datum[]>{
    return this.http.get<Datum[]>(`${this.baseUrl}api/Park/getParksAPI?limit=496`);
   }
   getParkById(id:string):Observable<Datum>{
    return this.http.get<Datum>(`${this.baseUrl}api/Park/getParkById?_id=${id}`);
   }
   getParksById(adventureLogs:AdventureLog[]):Observable<Datum[]>{
    return this.http.get<Datum[]>(`${this.baseUrl}api/Park/getParksById?_adventureLogs=${adventureLogs}`);
   }
  }
