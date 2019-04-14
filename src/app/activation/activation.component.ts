import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MeService } from '../me.service';
import { ActivationResponse } from '../activationResponse';
import { ResendCodeResponse } from '../resendCodeResponse';

@Component({
    selector: 'app-activation',
    templateUrl: './activation.component.html',
    styleUrls: ['./activation.component.css']
})

@Injectable()
export class ActivationComponent implements OnInit {

    problem = '';

    constructor(private http: HttpClient,
                public router: Router,
                private MeService: MeService) { }

    ngOnInit() { }

    active(activationCode: string): void {
        this.MeService.active(activationCode).subscribe((body) => {
          if (body.ok) {
              this.router.navigate(['/interests']);
          }
          else {
              this.problem = body.problem;
          }
        });
        
      }
      resendCode(): void {
        this.MeService.resendCode().subscribe((body) => {
          if (body.ok) {
              this.router.navigate(['/activation']);
          }
          else {
              this.problem = body.problem;
          }
        });
        
      }
}
