import { Component } from '@angular/core';
import {OrderForm} from '../order-form/order-form';

@Component({
  selector: 'app-order',
  imports: [
    OrderForm
  ],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {

}
