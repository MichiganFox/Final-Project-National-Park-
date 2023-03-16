import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Park } from '../Model/park';

@Injectable({
  providedIn: 'root'
})
export class ParksService {
  apiUrl = 'https://developer.nps.gov/api/v1/parks?api_key=nqWua9Cniro1uf47bUW2qy88NQaOc2GcyHTqbZ0D'
  constructor(private http: HttpClient) { }

  getParks():Observable<Park[]>{
    return this.http.get<Park[]>(this.apiUrl);

}
}
