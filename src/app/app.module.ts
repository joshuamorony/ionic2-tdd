import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProductPage } from '../pages/product/product';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { WishlistService } from '../providers/wishlist-service';
import { Products } from '../providers/products';

@NgModule({
  declarations: [
    MyApp,
    ProductPage,
    WishlistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductPage,
    WishlistPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Products, WishlistService]
})
export class AppModule {}