import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Products } from '../../providers/products';
import { WishlistPage } from '../wishlist/wishlist';
import { WishlistService } from '../../providers/wishlist-service';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController, public productsService: Products, public wishlistService: WishlistService) {}

  ionViewDidLoad() {
  	this.productsService.load();
  }

  launchWishlist() {
  	this.navCtrl.push(WishlistPage);
  }

  addToWishlist(product){
  	this.wishlistService.addProduct(product);
  }

}
