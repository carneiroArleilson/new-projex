import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderInterface } from '../interface/order.intarface';
import { Row } from '../interface/row.interface';


@Injectable({
  providedIn: 'root',
})
export class ProductOrderService {
  private order = new BehaviorSubject<OrderInterface>({
    id : 0,
    clients : [],
    products : [],
    total : 0
  });
  castOrder = this.order.asObservable();

  constructor() {}



  changeOrder(newOrder: OrderInterface) {
    this.order.next(newOrder);
  }
}
