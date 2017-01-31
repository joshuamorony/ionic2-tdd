import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Products } from '../../providers/products'

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController, public productsService: Products) {}

  ionViewDidLoad() {
  	this.productsService.load();
  }

}
