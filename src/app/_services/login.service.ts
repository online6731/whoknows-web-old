import { Injectable } from '@angular/core';
import { HttpClient }	from '@angular/common/http';
import { Observable }	from 'rxjs';
import { LoginResponse } from '../_models/LoginResponse'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse>{
		return this.http.post<LoginResponse>(`${localStorage.getItem("server")}/login`, { username: username, password: password });
	}
}
