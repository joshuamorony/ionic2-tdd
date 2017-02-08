import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

}
