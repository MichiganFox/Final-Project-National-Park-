import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserProfile } from '../Model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(@Inject('BASE_URL') private baseUrl:string, private http:HttpClient ) { }

   getUserProfile(googleId: string):Observable<UserProfile>{
    return this.http.get<UserProfile>(`${this.baseUrl}api/UserProfile/getUserProfile?_googleId=${googleId}`);

}

updateUserProfile(updateProfile: UserProfile):Observable<UserProfile>{
  return this.http.put<UserProfile>(`${this.baseUrl}api/UserProfile/updateUserProfile?_profileId=${updateProfile.id}&_googleId=${updateProfile.googleId}&_region=${updateProfile.region}&_username=${updateProfile.userName}&_homeTown=${updateProfile.homeTown}&_activities=${updateProfile.activities}&_lodging=${updateProfile.lodging}&_style=${updateProfile.style}`,{});

}

createUserProfile(createUserProfile: UserProfile): Observable<UserProfile>{
  return this.http.post<UserProfile>(`${this.baseUrl}api/UserProfile/createUserProfile?_googleId=${createUserProfile.googleId}&_region=${createUserProfile.region}&_username=${createUserProfile.userName}&_homeTown=${createUserProfile.homeTown}&_activities=${createUserProfile.activities}&_lodging=${createUserProfile.lodging}&_style=${createUserProfile.style}`,{});
}
}