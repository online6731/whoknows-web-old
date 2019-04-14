import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User }	from './user';
import { ActivationResponse } from './activationResponse';
import { ResendCodeResponse } from './resendCodeResponse';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})


export class MeService {

	problem = '';
	  constructor( private http : HttpClient,
								 public router: Router,
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

	getProfile(): Observable<profileResponse>{
		return this.http.post<profileResponse>(`${localStorage.getItem("server")}/me/profile`, {});
	}

}

interface profileResponse {
	ok				: string;
	response 		: string;
	problem			: string;
	error			: string;
	
	profile	 		: User;
}
