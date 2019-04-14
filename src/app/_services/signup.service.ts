import { Injectable } from '@angular/core';
import { HttpClient }	from '@angular/common/http';
import { Observable }	from 'rxjs';
<<<<<<< HEAD:src/app/_services/signup.service.ts
import { SignupGuestResponse } from '../_models/signupGuestResponse'
import { SignupMemberResponse } from '../_models/SignupMemberResponse'
=======
import { SignupGuestResponse } from './signupGuestResponse'
import { SignupMemberResponse } from './SignupMemberResponse'
>>>>>>> 8a2ec8a4f142695a9a158e9c7ad636651d34e186:src/app/signup.service.ts

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
