import { Injectable }
	from '@angular/core';

import { HttpClient }
	from '@angular/common/http';

import { Observable, of }
	from 'rxjs';

import { User }
	from '../_models/user';

import { Question }
	from '../_models/question';

import { Contest }
	from '../_models/contest';

import { SendAnswerResponse }
	from '../_models/sendAnswerResponse';

import { ViewContestResponse }
	from '../_models/viewContestResponse';

import { ContestJoinResponse } from '../_models/contestJoinResponse';

import { ContestFindResponse } from '../_models/contestFindResponse';

import { ContestNewResponse } from '../_models/contestNewResponse';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  	constructor(
  		private http    	: HttpClient,
	) {}


  contestFind(compact: boolean, condition: any): Observable<ContestFindResponse>{

    return this.http.post<ContestFindResponse>(`${localStorage.getItem("server")}/contest/find`, {compact: compact, condition: condition});
  }

  contestJoin(_id: String): Observable<ContestJoinResponse>{

    return this.http.post<ContestJoinResponse>(`${localStorage.getItem("server")}/contest/join`, {contest: _id});
  }


/*	viewContest(contestID: string): Observable<ViewContestResponse>{
		return this.http.post<ViewContestResponse>(`${localStorage.getItem("server")}/contest/${contestID}/view`, {});
	}*/

/*	sendAnswer(contestID: string, round: number, answer: string): Observable<SendAnswerResponse>{
		return this.http.post<SendAnswerResponse>(`${localStorage.getItem("server")}/contest/${contestID}/round/${round}/answer`, { answer: answer, questionID: round});
	}*/

/*	contestNew(type: string, tags: string[], questionCount: number, duration: number): Observable<ContestNewResponse>{
		return this.http.post<ContestNewResponse>(`${localStorage.getItem("server")}/contest/new`, { type: type, tags: tags,  questionCount: questionCount, duration: duration });
	}*/

}
