import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { ContestFindResponse } from '../_models/contestFindResponse';
import { ContestJoinResponse } from '../_models/contestJoinResponse';
import { MeService } from '../_services/me.service';
import { Contest } from '../_models/contest';

@Component({
    selector:     'app-main',
    templateUrl:  './main.component.html',
    styleUrls:    ['./main.component.css']
})


@Injectable()
export class MainComponent implements OnInit {

    arrayColors = [];
    navLinks = [
        { label: 'friends'		, path: '/friends'},
        { label: 'play'			, path: '/main'},
        { label: 'profile'		, path: '/profile'},
        { label: 'shop'			, path: '/shop'}
    ];

    startedcontests:   Contest[];
    contests:          Contest[];
    wantedcontests:    Contest[];
    user:           User;
    smallWidth = false;

    constructor(
        private http:       HttpClient,
        public  router:     Router,
        private MeService:  MeService
    ) {
       /*this.contests = [{name: 'football',duration		: 1000,  timeToStart 		: 800},{name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},
       {name: 'football',duration		: 1000,  timeToStart 		: 800},


      ];*/





    }

    ngOnInit() {

        //this.getProfile();
        //this.getListOfcontests();
        //this.timeToStartTimer();
    }

    /*getListOfcontests(): void {
        this.http.post<contestListResponse>(`${localStorage.getItem('server')}/contest/list`, {}).subscribe(data => {
            if (data.ok) {
                this.contests = data.contests;
                this.wantedcontests = data.contests;
                this.contests.forEach(function(contest) {
                    contest.timeToStart = Math.round((new Date(contest.rules.start.date).getTime() - Date.now()) / 1000);
                });
                // console.log(this.contests);
                // console.log(new Date(data.contests[0].rules.start.date).getTime());
                // console.log(Date.now());
            } else {
                // try again
            }
        });

        // setTimeout(this.getListOfcontests(), 1000 * 20);
    }

    contestJoin(id: string): void {
        this.http.post<contestJoinResponse>(`${localStorage.getItem('server')}/contest/${id}/team/online6731/join`, {}).subscribe(data => {
            console.log(data);
            if (data.ok) {
                this.router.navigate([`/contest/${id}/view`]);
            } else {
                // try again
            }
            // this.getListOfcontests();
        });
    }

    opencontest(id: string): void {
        this.router.navigate([`/contest/${id}/view`]);
    }

    watchJoin(id: string): void {
        this.http.post<contestJoinResponse>('${localStorage.getItem("server")}/contest/list', {}).subscribe(data => {
            if (data.ok) {
                // redirect to contest view
            } else {
                // try again
            }
            // this.getListOfcontests();
        });
    }

    contestNew(): void {
        this.router.navigate([`/contest/new`]);
    }

    quickPlay(): void {
        this.router.navigate([`/contest/${this.contests[0].name}/view`]);
    }

    getProfile(): void {
        this.MeService.getProfile().subscribe((profileResponse) => {
            if (profileResponse.ok) {
                this.user = profileResponse.profile;
            } else {

            }
        });
    }

    timeToStartTimer(): void {
        console.log('contest.timeToStart');
        if (this.contests) {
            // console.log("contest.timeToStart");
            this.contests.forEach(function(contest) {
                if (contest.timeToStart > -1000) {
                    contest.timeToStart -= 1;
                }
                // console.log(contest.timeToStart);
            });
        }
        setTimeout(this.timeToStartTimer, 1000 * 1);
    }
*/
}

