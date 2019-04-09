import { Component, OnInit , Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LoginResponse } from '../LoginResponse';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
		hide = true;
		problem					= '';

		constructor(
				private http: HttpClient,
				public 	router: Router
		) {}

		ngOnInit() { }

		login(username: string, password: string): void {
			this.problem="";
			this.http.post<LoginResponse>(`${localStorage.getItem('server')}/login`,
				{ username: username, password: password }).subscribe(data => {

								if (data.ok) {
										localStorage.setItem('access_token', data.token);
										localStorage.setItem('username', username);
										this.router.navigate(['/main']);

								} else {
										this.problem = data.problem;
								}

						});
		}
}

