import { TestBed, inject, async } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Products } from './products';
 
describe('Provider: Products', () => {
 
    beforeEach(async(() => {

        TestBed.configureTestingModule({
 
            declarations: [

            ],
 
            providers: [
            	Products,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http, 
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
 
            imports: [
                HttpModule
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
    });

    it('should have a non empty array called products', inject([Products, MockBackend], (productsService, mockBackend) => {
 
        const mockResponse = '{"products": [{"title": "Cool shoes", "description": "Isnt it obvious?", "price": "39.99"}, {"title": "Broken shoes", "description": "You should probably get the other ones", "price": "89.99"}, {"title": "Socks", "description": "The essential footwear companion", "price": "2.99"} ] }';

        mockBackend.connections.subscribe((connection) => {

            connection.mockRespond(new Response(new ResponseOptions({
                body: mockResponse
            })));

        });

    	productsService.load();

		expect(Array.isArray(productsService.products)).toBeTruthy();
		expect(productsService.products.length).toBeGreaterThan(0);

    }));

 
});