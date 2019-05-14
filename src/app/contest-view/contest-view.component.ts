import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Contest } from '../_models/contest';
import { Tag } from '../_models/tag';
import { ContestService } from '../_services/contest.service';


@Component({
  selector: 'app-contest-view',
  templateUrl: './contest-view.component.html',
  styleUrls: ['./contest-view.component.css']
})

export class ContestViewComponent implements OnInit {
  contests:          Contest[];
  user:           User;
  tags : Tag[]=[];
  tagsTitle : String[];
  problem: String = '';
  joinCondition : Boolean = false;
  enterCondition : Boolean = false;
  disabledJoinCondition : Boolean = false;
  disabledEnterCondition : Boolean = false;
  userLevel : Number = 0;
  date1 : Date = new Date;




  constructor(
    private ContestService:  ContestService,
  ) {


    this.contests =  [
      {name : 'مسابقه دوره ای 132',
     type  : 'kk',

    prize                    : {
        coin                 :'name',
        score                :'name',
    },

    roundsInfo                : [{
        tags                : [{title: 'football', persianTitle: 'ptitlle' , _id: '1223' },{title: 'film', persianTitle: 'ptitlle' , _id: '1223' },{title: 'car', persianTitle: 'ptitlle' , _id: '1223' },{title: 'book', persianTitle: 'ptitlle' , _id: '1223' }],
        level                : 5,
        start                :new Date(),
        end                    :new Date(),
    }],

    _id                       : "mamade khar",

    start                    : {
        time                : new Date("Wed May 18 2019 23:58:59 GMT+0430 (Iran Daylight Time)"),
        constants            : {
            min                : 5,
            max                : 5,
        }
    },

    end                        : {
        time                : new Date("Wed May 18 2019 23:59:59 GMT+0430 (Iran Daylight Time)"),
        constants            : {
            min                : 5,
            max                : 5,
        }
    },

    level                   : 5,

    join                    : {
        time                : new Date("Wed May 13 2019 23:57:59 GMT+0430 (Iran Daylight Time)"),
        level                : {
            min                : 5,
            max                : 5,
        },
        score                : {
            min                : 5,
            max                : 5,
        },
        payment                : {
            coin            : 5,
        }
    },

    availability            : {
        time                :new Date(),
    },

    generation                : {
        time                :new Date(),
    },

    contestans                : [this.user],

    rounds                    : [{
        question            : [{ }], // should refer to question model
        contestansts        : {
            username        : {
                answer        :'name',
            },
        }
    }]
    }
  ];
  }


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("profile"));
       this.contests[0].roundsInfo.forEach((roundInfo)=>{
       this.tags = this.tags.concat(roundInfo.tags);
      });
      this.tagsTitle= this.tags.map(tags => tags.title);
      const set = new Set(this.tagsTitle);
      this.tagsTitle = Array.from(set);
      console.log(this.contests[0].roundsInfo);
      console.log(this.tagsTitle);
      this.submitButton();


  }

  submitButton(){
    if (this.user && this.user.level) this.userLevel = this.user.level;
    if (!this.user) this.userLevel = 0;
    this.joinCondition = !(this.contests[0].contestans.map(a => a.username).includes(this.user.username));
    this.enterCondition = (this.contests[0].contestans.map(a => a.username).includes(this.user.username));
    this.disabledJoinCondition = ((this.date1.getMilliseconds() < this.contests[0].join.time.getMilliseconds()) && (this.contests[0].join.level.min <= this.userLevel) && (this.contests[0].join.level.max >= this.userLevel));
    this.disabledEnterCondition = ((this.date1.getMilliseconds() > this.contests[0].start.time.getMilliseconds()) && (this.date1.getMilliseconds()<this.contests[0].end.time.getMilliseconds()));
  }
  contesrJoin(): void {
    this.ContestService.contestJoin(this.contests[0]._id).subscribe((body) => {
      if(body.ok){
        this.contests[0].contestans.concat(this.user);
      }
      else this.problem = body.problem;
    });
  }








}
