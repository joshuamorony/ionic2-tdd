import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishlistService } from '../../providers/wishlist-service'

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navCtrl: NavController, public wishlistService: WishlistService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  deleteFromWishlist(product){
  	this.wishlistService.deleteProduct(product);
  }

}
