import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ProductDetailService {

    // private product = new Subject<string[]>();
    // productdetail = this.product.asObservable();
    product:Array<any>;
    Productdata(jsonData){
     //console.log(jsonData);
      this.product = jsonData;
      console.log(this.product);
    }

    getProductdata(){
      return this.product;
    }

  constructor() { }

}
