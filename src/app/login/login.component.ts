import { Component, OnInit , Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LoginResponse } from '../_models/LoginResponse';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';

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
				public 	router: Router,
				private LoginService: LoginService
		) {}

		ngOnInit() { }

		login(username: string, password: string): void {
			this.problem="";
			this.LoginService.login(username, password).subscribe((body) => {

								if (body.ok) {
										localStorage.setItem('access_token', body.token);
										localStorage.setItem('username', username);
										this.router.navigate(['/main']);

								} else {
										this.problem = body.problem;
								}

						});
		}
}

