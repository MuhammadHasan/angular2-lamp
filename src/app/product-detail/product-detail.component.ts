import { Component, OnInit ,Injectable } from '@angular/core';
import {ProductDetailService} from '../product-detail.service'; 

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  lampdetail : any[];
  constructor(private productdetailservice: ProductDetailService) {
    this.lampdetail = productdetailservice.getProductdata();
    console.log(this.lampdetail);             
  }
  

  ngOnInit() {
  }

}
