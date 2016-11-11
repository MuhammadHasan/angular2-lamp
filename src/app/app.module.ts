import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import {DropdownModule} from 'ng2-dropdown';
import {Collapse} from './collapse.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductDetailService} from './product-detail.service';
import {AddToCardService} from './add-to-card.service';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    Collapse,
    ProductDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'productDetail', component: ProductDetailComponent },
      { path: 'checkout', component: CheckoutComponent }
    ])
  ],
  providers: [
    ProductDetailService,
    AddToCardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
