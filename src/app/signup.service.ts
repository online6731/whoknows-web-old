import { Injectable } from '@angular/core';
import { HttpClient }	from '@angular/common/http';
import { Observable }	from 'rxjs';
import { SignupGuestResponse } from './signupGuestResponse'
import { SignupMemberResponse } from './signupMemberResponse'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {}
  
  guest(): Observable<SignupGuestResponse>{
		return this.http.post<SignupGuestResponse>(`${localStorage.getItem("server")}/signup/guest`, {});
  }
  signupMember(username: string, password: string, mobileNumber: string): Observable<SignupMemberResponse>{
		return this.http.post<SignupMemberResponse>(`${localStorage.getItem("server")}/signup/member`, { username: username, password: password, mobileNumber: mobileNumber });
	}
}