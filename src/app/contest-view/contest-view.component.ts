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
import { sendAnswerResponse }
    from '../_models/sendAnswerResponse';
import { viewContestResponse }
    from '../_models/viewcontestResponse';
    import { joinContestResponse } from '../_models/joincontestResponse';

import { Contest }
    from '../_models/contest';

import { ContestService } from '../_services/contest.service';

import { formatDate } from '@angular/common';


@Component({
  selector: 'app-contest-view',
  templateUrl: './contest-view.component.html',
  styleUrls: ['./contest-view.component.css']
})


@Injectable()
export class ContestViewComponent implements OnInit {

    contest: Contest;
    isIncontest = false;
    teamNames = [];
    myTeam = localStorage.getItem("username");
    date;

  constructor(
        private http    	: HttpClient,
        public  router  	: Router,
        private route 		: ActivatedRoute,
        private contestService : ContestService
  ) { }


  ngOnInit() {
      //this.viewcontest(this.route.snapshot.params.contestID);
      localStorage.setItem("isIncontest", "false");
  }

/*
  viewcontest(contestID: string): void{
      this.contestService.viewcontest(contestID).subscribe(
        (viewcontestResponse: viewcontestResponse) => {
            if (viewcontestResponse.ok){

                this.contest = viewcontestResponse.contest;
                this.date = formatDate(this.contest.rules.start.date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0430');

                viewcontestResponse.contest.teams.forEach(function(team){

                    if (team.team == localStorage.getItem("username")){
                        localStorage.setItem("isIncontest", "true");
                        //this.isIncontest = true;
                        console.log('you are in contest');
                    }

                    team.members.forEach(function(player){

                    });
                });

                viewcontestResponse.contest.teams.forEach(function(team){
                    this.teamNames.push(team.team);
                });

            }
            else {

            }
        }
    );
  }



  joincontest(contestID: string): void{
    this.contestService.joincontest(contestID, localStorage.getItem("username")).subscribe(
        (joincontestResponse: joincontestResponse) => {
            if (joincontestResponse.ok){

                this.viewcontest(this.route.snapshot.params.contestID);

                //this.router.navigate([`/contest/${contestID}/team/${localStorage.getItem("username")}/play`]);
            } else {

            }
        }
    );
  }

  opencontest(contestID: string): void {
    this.router.navigate([`/contest/${contestID}/team/${localStorage.getItem("username")}/play`]);
  }

  incontest() {
      return localStorage.getItem('isIncontest') == 'true';
  }


*/
}

