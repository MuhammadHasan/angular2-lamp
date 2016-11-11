import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {DropdownModule} from 'ng2-dropdown'
import {Collapse} from '../collapse.component';
import {ProductDetailService} from '../product-detail.service'; 
import {AddToCardService} from '../add-to-card.service'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //qty:any = 1;
    @Output() counterout = new EventEmitter();
    card: number;
    product: any[] = [];

  lampsProduct: any[] = [
      { "id": 1,"image":"../../assets/images/p1.jpg" ,"name": "lamp1", "price": 18000, "discount": 10 ,"qty": 0 },
      { "id": 2,"image":"../../assets/images/p2.jpg" ,"name": "lamp2", "price": 18000, "discount": 0 , "qty": 0 },
      { "id": 3,"image":"../../assets/images/p3.jpg" ,"name": "lamp3", "price": 18000, "discount": 18 ,"qty": 0 },
      { "id": 4,"image":"../../assets/images/p4.jpg" ,"name": "lamp4", "price": 18000, "discount": 8 ,"qty": 0},
      { "id": 5,"image":"../../assets/images/p5.jpg" ,"name": "lamp5", "price": 18000, "discount": 5 ,"qty": 0},
      { "id": 6,"image":"../../assets/images/p6.jpg" ,"name": "lamp6", "price": 18000, "discount": 50 ,"qty": 0},
      { "id": 7,"image":"../../assets/images/p7.jpg" ,"name": "lamp7", "price": 18000, "discount": 30 ,"qty": 0},
      { "id": 8,"image":"../../assets/images/p8.jpg" ,"name": "lamp8", "price": 18000, "discount": 0 ,"qty": 0},
      { "id": 9,"image":"../../assets/images/p9.jpg" ,"name": "lamp5", "price": 18000, "discount": 5, "qty": 0},
      { "id": 10,"image":"../../assets/images/p10.jpg" ,"name": "lamp6", "price": 18000, "discount": 50 ,"qty": 0},
      { "id": 11,"image":"../../assets/images/p11.jpg" ,"name": "lamp7", "price": 18000, "discount": 30 ,"qty": 0},
      { "id": 12,"image":"../../assets/images/p12.jpg" ,"name": "lamp8", "price": 18000, "discount": 0 ,"qty": 0}
  ];


  constructor(private productdetailservice : ProductDetailService,private addtocardservice : AddToCardService) { }

  clickData(lamp,$index){
    //console.log(lamp,$index);
    this.productdetailservice.Productdata(lamp);
  }

  addToCard(lamp,$index){
    //console.log(lamp,$index);
    this.addtocardservice.addtocardData(lamp);  
  }

  // addToCard(lamp,$index){
  //   //console.log(lamp,$index);
  //   this.product.push(lamp);
  //   this.card = this.product.length;
  //   console.log(this.card);
  //   this.counterout.emit(this.card);
  // }


  ngOnInit() {
  }

}
