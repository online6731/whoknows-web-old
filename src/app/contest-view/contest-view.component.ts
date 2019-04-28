import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Contest } from '../_models/contest';
import { Tag } from '../_models/tag';


@Component({
  selector: 'app-contest-view',
  templateUrl: './contest-view.component.html',
  styleUrls: ['./contest-view.component.css']
})

export class ContestViewComponent implements OnInit {
  contests:          Contest[];
  user:           User;
  tags : Tag[]=[];
  tagsTitle : string[];



  constructor() {
    this.contests =  [
      {name : 'مسابقه دوره ای 132',
     type  : 'kk',

    prize                    : {
        coin                 :'name',
        score                :'name',
    },

    roundsInfo                : [{
        tags                : [{title: 'football', persianTitle: 'ptitlle' , _id: '1223' },{title: 'film', persianTitle: 'ptitlle' , _id: '1223' }],
        level                : 5,
        start                :new Date(),
        end                    :new Date(),
    }],

    start                    : {
        time                : new Date(),
        constants            : {
            min                : 5,
            max                : 5,
        }
    },

    end                        : {
        time                :new Date(),
        constants            : {
            min                : 5,
            max                : 5,
        }
    },

    join                    : {
        time                :new Date(),
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
       this.contests[0].roundsInfo.forEach((roundInfo)=>{
       this.tags = this.tags.concat(roundInfo.tags);
      });
      this.tagsTitle= this.tags.map(tags => tags.title);
      const set = new Set(this.tagsTitle);
      this.tagsTitle = Array.from(set);
      console.log(this.contests[0].roundsInfo);
      console.log(this.tagsTitle);


  }

}
