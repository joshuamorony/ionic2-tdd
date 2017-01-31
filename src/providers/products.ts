import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Products {

	products: any;

	constructor(public http: Http) {

	}

	load(){

		this.http.get('assets/data/products.json').map(res => res.json()).subscribe(data => {
			this.products = data.products;
		});

	}

}