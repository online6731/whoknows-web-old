/* tslint:disable use-pipe-transform-interface */
import { Pipe, PipeTransform } from '@angular/core';

import { MainComponent } from './main.component';
import { Contest } from '../_models/contest';
import { equal } from 'assert';

@Pipe({ name: 'timeee' })
export class FilterBarPipeTime implements PipeTransform {
  date1 : Date;
  date2 : Date;
  date3 : Date = new Date();
  date4 : Date;
  boooli : Boolean;
  transform(contests: Contest[]) :Contest[]{
    return contests.filter(Contest => {
      if(true){
        this.date1 = new Date(Contest.start.time.getFullYear(),Contest.start.time.getMonth(),(Contest.start.time.getDate()));
        this.date2 = new Date(this.date3.getFullYear(),this.date3.getMonth(),this.date3.getDate());
        console.table({1:this.date1.getTime() , 2:this.date2.getTime()});
        console.log(this.date1 == this.date2);
        this.boooli = ((this.date1.getFullYear() == this.date2.getFullYear()) && (this.date1.getMonth() == this.date2.getMonth()) && (this.date1.getDate() == this.date2.getDate()));
        return (this.date1.getTime()==this.date2.getTime());
      }
      /*if(MainComponent.prototype.selectedTime === "tomorrow"){
        (Contest.start.time.getDay() == (MainComponent.prototype.nowDate.getDay() + 1));
      }*/
    });
  }
}
/*

@Pipe({ name: 'level' })
export class FilterBarPipeLevel implements PipeTransform {
  transform(contests: Contest[]) {
    return contests.filter(Contest => Contest.start.time);
  }
}


@Pipe({ name: 'joinable' })
export class FilterBarPipe implements PipeTransform {
  transform(contests: Contest[]) {
    return contests.filter(Contest => Contest.start.time);
  }
}
*/
