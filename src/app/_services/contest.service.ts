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

import { sendAnswerResponse }
	from '../_models/sendAnswerResponse';

import { viewContestResponse }
	from '../_models/viewcontestResponse';

import { joinContestResponse } from '../_models/joincontestResponse';

import { ContestNewResponse } from '../_models/contestNewResponse';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  	constructor(
  		private http    	: HttpClient,
	) {}


	joinContest(contestID: string, teamID: string): Observable<joinContestResponse>{
		return this.http.post<joinContestResponse>(`${localStorage.getItem("server")}/contest/${contestID}/team/${teamID}/join`, {});
	}

/*	viewContest(contestID: string): Observable<viewContestResponse>{
		return this.http.post<viewContestResponse>(`${localStorage.getItem("server")}/contest/${contestID}/view`, {});
	}*/

/*	sendAnswer(contestID: string, round: number, answer: string): Observable<sendAnswerResponse>{
		return this.http.post<sendAnswerResponse>(`${localStorage.getItem("server")}/contest/${contestID}/round/${round}/answer`, { answer: answer, questionID: round});
	}*/

/*	contestNew(type: string, tags: string[], questionCount: number, duration: number): Observable<ContestNewResponse>{
		return this.http.post<ContestNewResponse>(`${localStorage.getItem("server")}/contest/new`, { type: type, tags: tags,  questionCount: questionCount, duration: duration });
	}*/

}
