import { Component, OnInit } from '@angular/core';
import { AddToCardService } from '../add-to-card.service';
import { ProductDetailService } from '../product-detail.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  addtocardLamp: any[];
  addtocardCount: number;
  total = 0;
  deliveryCharges = 0;
  totalAmount = 0;

  constructor(private productdetailservice: ProductDetailService, private addtocardservice: AddToCardService) {
    this.addtocardLamp = addtocardservice.getaddtocardData();
    console.log(this.addtocardLamp);

    this.addtocardCount = this.addtocardLamp.length;
    if (this.addtocardLamp.length > 0) {
      for (var i = 0; i < this.addtocardLamp.length; i++) {
        this.total += (this.addtocardLamp[i].price - (this.addtocardLamp[i].price * (this.addtocardLamp[i].discount / 100)));
      }
      if (this.total > 15000) {
        this.totalAmount += (this.total + this.deliveryCharges);
      } else {
        this.deliveryCharges = 500;
        this.totalAmount += (this.total + this.deliveryCharges);
      }
    }
  }

  clickData(lamp, $index) {
    //console.log(lamp,$index);
    this.productdetailservice.Productdata(lamp);
  }

  removeData(lamp, $index) {
    console.log(lamp,$index);
    this.addtocardservice.delAddtocardData($index);
    this.addtocardCount -= 1;
    if (this.addtocardLamp.length >= 0) {
      
      //this.total -= (lamp.price - (lamp.price * (lamp.discount / 100)));
      //this.totalAmount -= ((lamp.price - (lamp.price * (lamp.discount / 100))) + this.deliveryCharges);
      if (this.total > 15000) {
        this.total -= (lamp.price - (lamp.price * (lamp.discount / 100)));
        this.deliveryCharges = 0;
        this.totalAmount -= (lamp.price - (lamp.price * (lamp.discount / 100)));
        if(this.total <= 15000){
          this.deliveryCharges = 500;
          this.totalAmount += this.deliveryCharges;
        }
        console.log(this.totalAmount);
      } else if(this.total <= 15000 ) {
        this.total -= (lamp.price - (lamp.price * (lamp.discount / 100)));
        //this.deliveryCharges = 500;
        this.totalAmount -= ((lamp.price - (lamp.price * (lamp.discount / 100))) + this.deliveryCharges);
        console.log(this.totalAmount);
        if(this.total === 0){
          this.deliveryCharges = 0;
          this.total = 0;
          this.totalAmount = 0;
          console.log(this.totalAmount);
        }
      }
    }
    
  }

  ngOnInit() {

  }



}
