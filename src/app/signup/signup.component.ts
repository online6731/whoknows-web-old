import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeService } from '../me.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../LoginResponse';
import { SignupMemberResponse } from '../SignupMemberResponse';
import { SignupGuestResponse } from '../SignupGuestResponse';
import { MatIconModule } from '@angular/material/icon';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes
  } from '@angular/animations';

  import { SignupService } from '../signup.service';

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
    show = false;
    agree = false;
    constructor(private http: HttpClient, 
                public  router: Router, 
                private SignupService:  SignupService) { }

    ngOnInit() { }

    showCondition(){
        this.show = true;
    }

    hideCondition(){
        setTimeout(() => {this.show = false;}, 500);
    }

    signupMember(username: string, password: string, mobileNumber: string): void {
        this.problem = "";
        if (!this.agree) {
            this.problem = 'لطفاً با قوانین موافقت کنید';
            return;
        }

        this.SignupService.signupMember(username, password, mobileNumber).subscribe((body) => {

            if (body.ok) {
                this.router.navigate(['/activation']);
                localStorage.setItem('access_token', body.token);
                localStorage.setItem('username', username);
            } else {
                this.problem = body.problem;
            }
        });
    }

    guest(): void {
      this.SignupService.guest().subscribe((body) => {
        if (body.ok === true){
          localStorage.setItem('access_token', body.token);
          this.router.navigate(['/interests']);
        } else {
            this.problem = body.problem;
        }

      })
    }
}
