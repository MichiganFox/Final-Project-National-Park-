import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

   getParksByActivities(allResults: string):Observable<Datum[]>{
    return this.http.get<Datum[]>(`${this.baseUrl}api/Park/getParksByActivities?_allResults=${allResults}`);
   }
   
  }
