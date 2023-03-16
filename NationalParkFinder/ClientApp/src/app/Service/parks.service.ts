import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Park } from '../Model/park';

@Injectable({
  providedIn: 'root'
})
export class ParksService {
 
  constructor(private http: HttpClient) { }

  getParks():Observable<Park[]>{
    return this.http.get<Park[]>("");

}
}
 