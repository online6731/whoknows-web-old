import { Injectable }
	from '@angular/core';

import { HttpClient }
	from '@angular/common/http';

import { Observable, of }
	from 'rxjs';

import { BuyResponse }
	from '../_models/buyResponse';

import { ShopSearchResponse } from '../_models/shopSearchResponse';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  	constructor(
  		private http    	: HttpClient,
	) {}


	buy(goodID: string): Observable<BuyResponse>{
		return this.http.post<BuyResponse>(`${localStorage.getItem("server")}/shop/good/${goodID}/buy`, {});
	}

	search(): Observable<ShopSearchResponse>{
		return this.http.post<ShopSearchResponse>(`${localStorage.getItem("server")}/shop/search`, {});
	}

}
