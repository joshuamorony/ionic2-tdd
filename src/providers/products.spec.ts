import { Products } from './products';
 
let productsService;
 
describe('Provider: Products', () => {
 
    beforeEach(() => {
      productsService = new Products();
    });
 
    it('should have a non empty array called products', () => {
 
            let products = productsService.products;
 
            expect(Array.isArray(products)).toBeTruthy;
            expect(products.length).toBeGreaterThan(0);
        }
    ));
 
});