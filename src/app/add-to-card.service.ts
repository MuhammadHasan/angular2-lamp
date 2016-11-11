import { Injectable,Output, EventEmitter } from '@angular/core';

@Injectable()
export class AddToCardService {

    product:Array<any> = [];
    @Output() addtocardEvent = new EventEmitter(true);
    count:number;
    addtocardData(jsonData){
     //console.log(jsonData);
      this.product.push(jsonData);
      console.log(this.product);
      this.count = this.product.length;
      this.addtocardEvent.emit(this.count);
    }

    delAddtocardData(index){
     //console.log(jsonData);
      this.product.splice(index,1);
      console.log(this.product);
      this.count = this.product.length;
      this.addtocardEvent.emit(this.count);
    }
 

    getaddtocardData(){
      return this.product;
    }

  constructor() { }

}
