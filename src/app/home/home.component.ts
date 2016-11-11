import { Component, OnInit } from '@angular/core';
import {ProductDetailService} from '../product-detail.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //lamps: any[] = [{},{},{}];
  lamps: any[] = [
      { "id": 1,"image":"../../assets/images/img1.jpg" ,"name": "lamp1", "price": 18000, "discount": 10 },
      { "id": 2,"image":"../../assets/images/img2.jpg" ,"name": "lamp2", "price": 18000, "discount": 0 },
      { "id": 3,"image":"../../assets/images/img3.jpg" ,"name": "lamp3", "price": 18000, "discount": 18 },
      { "id": 4,"image":"../../assets/images/img4.jpg" ,"name": "lamp4", "price": 18000, "discount": 8 },
      { "id": 5,"image":"../../assets/images/img5.jpg" ,"name": "lamp5", "price": 18000, "discount": 5 },
      { "id": 6,"image":"../../assets/images/img6.jpg" ,"name": "lamp6", "price": 18000, "discount": 50 },
      { "id": 7,"image":"../../assets/images/img7.jpg" ,"name": "lamp7", "price": 18000, "discount": 30 },
      { "id": 8,"image":"../../assets/images/img8.jpg" ,"name": "lamp8", "price": 18000, "discount": 0 },
  ];

  constructor(private productdetailservice : ProductDetailService) { 

  }

  clickData(lamp,$index){
    //console.log(lamp,$index);
    this.productdetailservice.Productdata(lamp);
  }


  ngOnInit() {
  }

}
