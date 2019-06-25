import { Injectable } 
	from '@angular/core';

import { HttpClient }
	from '@angular/common/http';
	
import { FindTagResponse } from '../_models/findTagResponse';


import { Observable, of, from } 
	from 'rxjs';

import { Tag }
	from '../_models/tag';


@Injectable({
  providedIn: 'root',
})


export class TagService {

  	constructor(
  		private http    	: HttpClient,
	) {}
  	

	find(): Observable<FindTagResponse>{
		return this.http.post<FindTagResponse>(`${localStorage.getItem("server")}/tag/find`, { condition: {} });
	}
}

