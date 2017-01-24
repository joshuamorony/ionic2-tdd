import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProductPage } from '../pages/product/product';
import { Products } from '../providers/products';

@NgModule({
  declarations: [
    MyApp,
    ProductPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Products]
})
export class AppModule {}