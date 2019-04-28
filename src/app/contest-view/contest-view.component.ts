import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Contest } from '../_models/contest';

@Component({
  selector: 'app-contest-view',
  templateUrl: './contest-view.component.html',
  styleUrls: ['./contest-view.component.css']
})

export class ContestViewComponent implements OnInit {
  contests:          Contest[];
  user:           User;


  constructor() {
    this.contests =  [
      {name : 'مسابقه دوره ای 132',
     type  : 'kk',

    prize                    : {
        coin                 :'name',
        score                :'name',
    },

    roundsInfo                : [{
        tags                : ['name'],
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

  }

}
