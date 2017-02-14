export class ConfigMock {
 
  public get(): any {
    return '';
  }
 
  public getBoolean(): boolean {
    return true;
  }
 
  public getNumber(): number {
    return 1;
  }
}
 
export class FormMock {
  public register(): any {
    return true;
  }
}
 
export class NavMock {
 
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }
 
  public setRoot(): any {
    return true;
  }
}
 
export class PlatformMock {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}
 
export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}

export class ProductsMock {
  public products: any = [
    {title: "Cool shoes", description: "Isnt it obvious?", price: "39.99"}
  ];
}

export class WishlistServiceMock {

  public products = [
    {title: 'Test 1', description: 'Test 1', price: '39.99'},
    {title: 'Test 2', description: 'Test 2', price: '29.99'},
    {title: 'Test 3', description: 'Test 3', price: '19.99'}
  ];

  public addProduct(product: Object): void {}

  public deleteProduct(product: Object): void {}
  
}