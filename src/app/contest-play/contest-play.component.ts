import { Component,
         OnInit,
         Injectable }
    from '@angular/core';

import { HttpClient }
    from '@angular/common/http';

import { RouterModule,
         Router,
         ActivatedRoute
        }
    from '@angular/router';

import { User }
    from '../_models/user';

import { Question }
    from '../_models/question';

import { Contest }
    from '../_models/contest';

import { SendAnswerResponse }
    from '../_models/sendAnswerResponse';

import { ViewContestResponse } from '../_models/viewContestResponse';

import { MatGridListModule,
         MatButtonToggleModule,
         MatButtonModule,
         MatTabsModule,
         MatListModule,
         MatInputModule,
        }
    from '@angular/material';

import { ContestService }
    from '../_services/contest.service';
import { from } from 'rxjs';


@Component({
    selector: 'app-contest-play',
    templateUrl: './contest-play.component.html',
    styleUrls: ['./contest-play.component.css']
})


@Injectable()
export class ContestPlayComponent implements OnInit {
    contestEnded		: boolean = false;
    contest 			: Contest;
    currentQuestion : Question;
    currentRound	: number = -1;
    score 			: number = 0;
    true_false_choices = ['غلط', 'درست'];
    constructor(
        private http    	: HttpClient,
        public  router  	: Router,
        private route 		: ActivatedRoute,
        private contestService : ContestService
    ) { }


    ngOnInit() {
        //this.viewcontest(this.route.snapshot.params.contestID);
    }

   /*gi viewcontest(contestID: string): void{
          this.contestService.viewcontest(contestID).subscribe(
            (ViewContestResponse: ViewContestResponse) => {
                if (ViewContestResponse.ok){

                    this.contest = ViewContestResponse.contest;

                    this.loadNextQuestion();

                    ViewContestResponse.contest.teams.forEach(function(team){
                        team.members.forEach(function(player){

                        });
                    });

                }
                else {

                }
            }
        );
    }


    sendAnswer(answer: string): void{
        this.contestService.sendAnswer(this.contest.name, this.currentRound, answer).subscribe(
        (SendAnswerResponse: SendAnswerResponse) => {
            if (SendAnswerResponse.ok){
                this.score += SendAnswerResponse.score;
                //this.loadNextQuestion();
            } else {
                console.log('errooooooooooor');
                //this.loadNextQuestion();
            }
        });
        this.loadNextQuestion();
    }

    loadNextQuestion(): void{
        if (this.currentRound < this.contest.questions.length - 1){
            this.currentRound += 1;
            console.log(this.currentQuestion);
        } else {
            this.contestEnded = true;
            console.log('contest ended');
        }
    }


*/
}

