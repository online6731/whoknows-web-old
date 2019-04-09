import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../LoginResponse';
import { SignupResponse } from '../SignupResponse';
import { activationResponse } from '../activationResponse';
import { MatIconModule } from '@angular/material/icon';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
  } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  /*animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]*/
})


@Injectable()
export class SignupComponent implements OnInit {
    hide = true;
    username1 = "";
    password1 = "";
    phoneNumber1 = "";
    problem = '';
    showUserPass = false;
    show = false;
    agree = false;
    constructor(private http: HttpClient, public  router: Router) { }

    ngOnInit() { }

    showCondition(){
        this.show = true;    
    }

    hideCondition(){
        setTimeout(() => {this.show = false;}, 500);
    }

    signup(username: string, password: string, mobileNumber: string): void {
        this.problem = "";
        if (!this.agree) {
            this.problem = 'please agree to our terms first';
            return;
        }

        this.http.post<SignupResponse>(`${localStorage.getItem('server')}/signup/member`,
            { username: username, password: password, mobileNumber: mobileNumber }).subscribe(data => {

            if (data.ok) {
                this.showUserPass = false;
                localStorage.setItem('username', username);
            } else {
                this.problem = data.problem;
            }
        });
    }

    guest(): void {
        this.http.post<SignupResponse>(`${localStorage.getItem('server')}/signup/guest`, {}).subscribe(data => {

            if (data.ok) {
                localStorage.setItem('username', data.username);
                localStorage.setItem('password', data.password);
                if (data.ok) {
                    localStorage.setItem('access_token', data.token);
                    this.router.navigate(['/interests']);
                } else {
                    this.router.navigate(['/main']);
                }
                
            } else {
                this.problem = data.problem;
            }
        });
    }
    active(code): void {
        this.http.post<activationResponse>(
            `${localStorage.getItem('server')}/signup/activation/user/${localStorage.getItem('username')}/code/${code}`, {})
            .subscribe(data => {
                if (data.ok) {
                    this.router.navigate(['/main']);
                } else {
                    this.problem = data.problem;
                }
        });
    }
}
