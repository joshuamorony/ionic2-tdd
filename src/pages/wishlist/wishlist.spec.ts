import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { WishlistPage } from './wishlist';
import { NavMock } from '../../mocks';
 
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
 
});