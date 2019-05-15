import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { ContestFindResponse } from '../_models/contestFindResponse';
import { ContestJoinResponse } from '../_models/contestJoinResponse';
import { MeService } from '../_services/me.service';
import { Contest } from '../_models/contest';
import { ContestService } from '../_services/contest.service';
import { FilterBarPipeTime } from './filterBar.pipe';
import { ok } from 'assert';
import { from } from 'rxjs';


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
    contests:          Contest[]=[];
    aab:          Contest[];
    wantedcontests:    Contest[];
    user:           User;
    nowDate:        Date;
    aaaa:         Date;
    bbbb:         Date;
    selectedTime: String = "today";
    joinableFilter : Boolean = false;
    joinedFilter : Boolean = false;
    selectedLevel: String = "all";
    smallWidth = false;

    constructor(
        private http:       HttpClient,
        public  router:     Router,
        private MeService:  MeService,
        private ContestService:  ContestService,


    ) {
      this.nowDate =  new Date();

    setInterval(() => {
        this.nowDate =  new Date();
     }, 1000);
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

      this.aab = [
        {
          name                    : "String",

          type                    : "String",

          prize                    : {
              coin                 :"String",
              score                :"String",
          },

          roundsInfo                : [{
              tags                : [{title: 'name', persianTitle: 'sss' , _id: '1223' }],
              level                : 55,
              start                :new Date(),
              end                    :new Date(),
          }],

          _id                       : "mamade khar",

          start                    : {
              time                : new Date("Wed May 07 2019 23:58:59 GMT+0430 (Iran Daylight Time)"),
              constants            : {
                  min                : 55,
                  max                : 55,
              }
          },

          end                        : {
              time                : new Date("Wed May 07 2019 23:59:59 GMT+0430 (Iran Daylight Time)"),
              constants            : {
                  min                : 55,
                  max                : 55,
              }
          },

          level                   : 5,

          join                    : {
              time                : new Date("Wed May 07 2019 23:57:59 GMT+0430 (Iran Daylight Time)"),
              level                : {
                  min                : 1,
                  max                : 5,
              },
              score                : {
                  min                : 55,
                  max                : 55,
              },
              payment                : {
                  coin            : 55,
              }
          },

          availability            : {
              time                : new Date(),
          },

          generation                : {
              time                : new Date(),
          },

          contestans                : [{
            bio : "maybe on another planet",
            coin		: 999999,
            followers : [],
            following : [],
            instagram : "mhdizmn",
            level : 4,
            messages: [],
            picture : "ssssssssssssssssss",
            score: 5000,
            username: "mhdizmn",
            _id: "ssssss",
            }],

          rounds                    : [{
              question            : [{ }], // should refer to question model
              contestansts        : {
                  username        : {
                      answer        :"String",
                  },
              }
          }],
        },
        {
          name                    : "string2",

          type                    : "String",

          prize                    : {
              coin                 :"String",
              score                :"String",
          },

          roundsInfo                : [{
              tags                : [{title: 'name', persianTitle: 'sss' , _id: '1223' }],
              level                : 55,
              start                :new Date(),
              end                    :new Date(),
          }],


          _id                       : "mamade gav",

          start                    : {
              time                : new Date("Wed May 07 2019 23:58:59 GMT+0430 (Iran Daylight Time)"),
              constants            : {
                  min                : 55,
                  max                : 55,
              }
          },

          end                        : {
              time                : new Date("Wed May 07 2019 23:59:59 GMT+0430 (Iran Daylight Time)"),
              constants            : {
                  min                : 55,
                  max                : 55,
              }
          },

          level                   : 7,

          join                    : {
              time                : new Date("Wed May 07 2019 23:57:59 GMT+0430 (Iran Daylight Time)"),
              level                : {
                  min                : 0,
                  max                : 10,
              },
              score                : {
                  min                : 55,
                  max                : 55,
              },
              payment                : {
                  coin            : 55,
              }
          },

          availability            : {
              time                : new Date(),
          },

          generation                : {
              time                : new Date(),
          },

          contestans                : [{
            bio : "maybe on another planet2",
            coin		: 999999,
            followers : [],
            following : [],
            instagram : "mhdizmn2",
            level : 4,
            messages: [],
            picture : "ssssssssssssssssss",
            score: 5000,
            username: "mhdizmn2",
            _id: "ssssss2",
            }],

          rounds                    : [{
              question            : [{ }], // should refer to question model
              contestansts        : {
                  username        : {
                      answer        :"String",
                  },
              }
          }],
        },

      ];


        this.getProfile();
        this.contests = this.contests.concat(this.aab[0]);
        this.contests = this.contests.concat(this.aab[1]);
        //this.aaaa = new Date(this.contests[0].start.time.getFullYear(), this.contests[0].start.time.getMonth(), this.contests[0].start.time.getDate());
       this.aaaa = new Date(this.nowDate.getFullYear(), this.nowDate.getMonth(), this.nowDate.getDate());
        //this.contestFind(false , {});
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
    }*/

    /*contestJoin(id: string): void {
        this.http.post<contestJoinResponse>(`${localStorage.getItem('server')}/contest/${id}/team/online6731/join`, {}).subscribe(data => {
            console.log(data);
            if (data.ok) {
                this.router.navigate([`/contest/${id}/view`]);
            } else {
                // try again
            }
            // this.getListOfcontests();
        });
    }*/

    opencontest(id: string): void {
        this.router.navigate([`/contest/${id}/view`]);
    }

    changeTimeFilter(filter: string){
      this.selectedTime = filter;
    }
    changeLevelFilter(filter: string){
      this.selectedLevel = filter;
    }
    changeJoinableFilter(){
      this.joinableFilter = !this.joinableFilter;
    }
    changeJoinedFilter(){
      this.joinedFilter = !this.joinedFilter;
    }

    /*watchJoin(id: string): void {
        this.http.post<contestJoinResponse>('${localStorage.getItem("server")}/contest/list', {}).subscribe(data => {
            if (data.ok) {
                // redirect to contest view
            } else {
                // try again
            }
            // this.getListOfcontests();
        });
    }*/

    /*contestNew(): void {
        this.router.navigate([`/contest/new`]);
    }*/

    /*quickPlay(): void {
        this.router.navigate([`/contest/${this.contests[0].name}/view`]);
    }*/

    getProfile(): void {
        this.MeService.getProfile().subscribe((body) => {
            if (body.ok) {
                localStorage.setItem("profile", JSON.stringify(body.profile));
                this.user = body.profile;
            } else {

            }
        });
    }


    /*contestFind(compact: boolean, condition: any): void{
      this.ContestService.contestFind(compact, condition).subscribe((body) => {
        if(body.ok){
          this.contests.concat(body.contests);
        }
    });

  }*/


    /*timeToStartTimer(): void {
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
    }*/
}

