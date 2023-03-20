import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Badges } from '../Model/badges';
import { UserBadge } from '../Model/user-badge';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(@Inject('Base_URL') private baseUrl:string, private http:HttpClient ) { 
  }

  getUserBadges(userId: number): Observable<Badges[]>{
    return this.http.get<Badges[]>(`${this.baseUrl}api/Badge/getUserBadges?_userId=${userId}`);
  }

  awardBadge(awardBadge:UserBadge): Observable<Badges[]>{
    return this.http.post<Badges[]>(`${this.baseUrl}api/Badge/awardBadge?_userId=${awardBadge.userId}&_badgeId=${awardBadge.badgeId}`, {});
  
  }
}

 