import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { WishlistPage } from './wishlist';
import { WishlistService } from '../../providers/wishlist-service';
import { NavMock, WishlistServiceMock } from '../../mocks';

let comp: WishlistPage;
let fixture: ComponentFixture<WishlistPage>;
let de: DebugElement;
let el: HTMLElement;
 
describe('Page: Wishlist Page', () => {
 
    beforeEach(async(() => {

        TestBed.configureTestingModule({
 
            declarations: [MyApp, WishlistPage],
 
            providers: [
                {
                    provide: NavController,
                    useClass: NavMock
                },
                {
                    provide: WishlistService,
                    useClass: WishlistServiceMock
                }
            ],
 
            imports: [
                IonicModule.forRoot(MyApp)
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(WishlistPage);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });
 
    it('should display all products contained in wishlist', () => {

        let wishlistService = fixture.debugElement.injector.get(WishlistService);

        fixture.detectChanges();

        de = fixture.nativeElement.getElementsByTagName('h3');

        wishlistService.products.forEach((product, index) => {

            el = de[index]
            expect(el.innerHTML).toContain(product.title);

        });

    });

    it('should make a call to remove a prouct from wishlist when delete button clicked', () => {

        let wishlistService = fixture.debugElement.injector.get(WishlistService);
        spyOn(wishlistService, 'deleteProduct');

        let firstWishlistProduct = wishlistService.products[0];

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('ion-item-sliding button'));
        de.triggerEventHandler('click', null);

        expect(wishlistService.deleteProduct).toHaveBeenCalledWith(firstWishlistProduct);        

    });

});