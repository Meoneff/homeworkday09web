import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    CartComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class CartModule { }
