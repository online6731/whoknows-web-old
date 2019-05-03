/* tslint:disable use-pipe-transform-interface */
import { Pipe, PipeTransform } from '@angular/core';

import { Contest } from '../_models/contest';
import { equal } from 'assert';

@Pipe({ name: 'time' })
export class FilterBarPipeTime implements PipeTransform {
  today : string = "today";
  date1 : Date;
  date2 : Date;
  date3 : Date = new Date();
  dayWeek : number;

  transform(contests: Contest[] , sTime: string) :Contest[]{
    return contests.filter(Contest => {
      if(sTime == "today"){
        /*this.date1.getUTCDay */
        this.date1 = new Date(Contest.start.time.getFullYear(),Contest.start.time.getMonth(),(Contest.start.time.getDate()));
        this.date2 = new Date(this.date3.getFullYear(),this.date3.getMonth(),this.date3.getDate());
        //console.table({1: , 2: });
        return (this.date1.getTime()==this.date2.getTime());
      }
      if(sTime == "thisWeek"){

        this.date1 = new Date(Contest.start.time.getFullYear(),Contest.start.time.getMonth(),(Contest.start.time.getDate()));
        this.date2 = new Date(this.date3.getFullYear(),this.date3.getMonth(),this.date3.getDate());
        this.dayWeek = this.date1.getUTCDay();
        if(this.date3.getUTCDay()<6 && this.date3.getUTCDay()>0) this.dayWeek+=2;
        if(this.date3.getUTCDay()>5 && this.date3.getUTCDay()<8) this.dayWeek-=5;
        //console.table({1: , 2: });
        return ((this.date2.getFullYear() == this.date1.getFullYear()) && (this.date2.getMonth() == this.date1.getMonth()) && ((this.date2.getDate() - this.dayWeek) < this.date1.getDate()) && ((this.date2.getDate() + 8 - this.dayWeek) > this.date1.getDate()));
      }
      if(sTime == "all") return true;
    });
  }
}


@Pipe({ name: 'level' })
export class FilterBarPipeLevel implements PipeTransform {
  transform(contests: Contest[] , sLevel: String) {
    return contests.filter(Contest => {
      if(sLevel == "all") return true;
      if(sLevel == "1") return (Contest.level == 1);
      if(sLevel == "2") return (Contest.level == 2);
      if(sLevel == "3") return (Contest.level == 3);
      if(sLevel == "4") return (Contest.level == 4);
      if(sLevel == "5") return (Contest.level == 5);
      if(sLevel == "6") return (Contest.level == 6);
      if(sLevel == "7") return (Contest.level == 7);
      if(sLevel == "8") return (Contest.level == 8);
      if(sLevel == "9") return (Contest.level == 9);
      if(sLevel == "10") return (Contest.level == 10);
    });
  }
}

/*
@Pipe({ name: 'joinable' })
export class FilterBarPipe implements PipeTransform {
  transform(contests: Contest[]) {
    return contests.filter(Contest => Contest.start.time);
  }
}
*/
