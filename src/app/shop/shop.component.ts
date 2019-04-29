import { Component,
		OnInit,
		Injectable }
	from '@angular/core';

import { HttpClient }
	from '@angular/common/http';

import { RouterModule, Router }
	from '@angular/router';

import { Good }
	from '../_models/good';

import { User }
	from '../_models/user';


import { MatGridListModule,
		 MatButtonToggleModule,
		 MatButtonModule,
		 MatTabsModule,
		 MatListModule,
		}
	from '@angular/material';


import { ShopService }
  from '../_services/shop.service';


import { MeService }
	from '../_services/me.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {

	goods		: [Good];
	user		: User;

	navLinks = [
		{ label: 'friends'		, path: '/friends'},
		{ label: 'play'			, path: '/main'},
		{ label: 'profile'		, path: '/profile'},
		{ label: 'shop'			, path: '/shop'}
	];


	constructor(
		private http		: HttpClient,
		public  router		: Router,
		private ShopService	: ShopService,
		private MeService	: MeService
	) { }


	ngOnInit() {
		this.search();
  		this.getProfile();
	}

	buy(goodID): void{
		this.ShopService.buy(goodID).subscribe((BuyResponse) => {

			console.log(BuyResponse);

			if (BuyResponse.ok){
				this.getProfile();
			}
			else {

			}
		});
    }

	search(): void{
		this.ShopService.search().subscribe((ShopSearchResponse) => {

			console.log(ShopSearchResponse);

			if (ShopSearchResponse.ok){
				this.goods = ShopSearchResponse.goods;
			}
			else {

			}
		});
    }


  	getProfile(): void{
		this.MeService.getProfile().subscribe(
			(profileResponse) => {
				if (profileResponse.ok){
					this.user = profileResponse.profile;
				}
				else {

				}
			}
		);
		//setTimeout(this.getProfile(), 1000 * 10);
  	}


}
