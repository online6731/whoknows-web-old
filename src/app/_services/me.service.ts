import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActivationResponse } from '../_models/activationResponse';
import { ResendCodeResponse } from '../_models/resendCodeResponse';
import { ProfileResponse } from '../_models/profileResponse';
import { EditUserResponse } from '../_models/editUserResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})


export class MeService {

	problem = '';
	  constructor(private http : HttpClient,
								public router: Router
							 ) {}


	active(activationCode: string): Observable<ActivationResponse>{
				return this.http.post<ActivationResponse>(
					`${localStorage.getItem("server")}/me/active`, {activationCode: activationCode}
				);
		}
	resendCode(): Observable<ResendCodeResponse>{
				return this.http.post<ResendCodeResponse>(
					`${localStorage.getItem("serve")}/me/resendCode`, {}
				);
	}

	getProfile(): Observable<ProfileResponse>{
		return this.http.post<ProfileResponse>(`${localStorage.getItem("server")}/me/profile`, {});
	}

	editProfile(newInfo): Observable<EditUserResponse>{
		return this.http.post<EditUserResponse>(`${localStorage.getItem("server")}/me/edit`, { newInfo: newInfo});
	}

}
