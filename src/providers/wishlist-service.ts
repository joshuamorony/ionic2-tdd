import { Injectable } from '@angular/core';

@Injectable()
export class WishlistService {

	products: any[] = [];

	constructor() {

	}

	addProduct(product: Object): void {

		if(!(this.products.indexOf(product) > -1)){
			this.products.push(product);			
		}

	}

	deleteProduct(product: Object): void {

		let index = this.products.indexOf(product);

		if(index > -1){
			this.products.splice(index, 1);
		}

	}

}
