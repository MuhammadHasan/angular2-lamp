import { Component,OnInit, EventEmitter } from '@angular/core';
import {AddToCardService} from './add-to-card.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  samplecardQty;
  lampdetail : any[];
  constructor(private addtocardservice: AddToCardService) {}

  // counterout(counter){
  //   this.samplecardQty = counter;
  //   console.log(counter);

  // }
  
  ngOnInit() {
     // Will fire everytime other component use the setter this.addtocardservice.addtocardEvent()
     this.addtocardservice.addtocardEvent.subscribe(count => this.samplecardQty = count); 
     
  }

}
