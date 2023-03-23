import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from '../Model/alerts';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(@Inject('BASE_URL') private baseUrl:string, private http:HttpClient ) { }

  getAlerts(parkId: string):Observable<Alert[]>{
    return this.http.get<Alert[]>(`${this.baseUrl}api/Alert/getAlerts?_park=${parkId}`);

}
}
