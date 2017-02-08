import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Products } from '../../providers/products';
import { WishlistPage } from '../wishlist/wishlist';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController, public productsService: Products) {}

  ionViewDidLoad() {
  	this.productsService.load();
  }

  launchWishlist() {

  	this.navCtrl.push(WishlistPage);

  }

}
