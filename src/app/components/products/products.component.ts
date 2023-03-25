import { ProductInterface } from './../core/interface/product.intarface';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OrderInterface } from '../core/interface/order.intarface';
import { Row } from '../core/interface/row.interface';
import {  ProductOrderService } from '../core/service/product-order.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Output() newProductEvent = new EventEmitter<Row[]>();

  order: Row[] = [];
  total = 0;
  items: Row[] = [];


  column = ["id", "nome", "preço", "ação"];
  count = 'products';

  product: Row[] =
  [
    {id : 1,
    name : 'notebook',
    price : 2500,
    selected : false
  },{id : 2,
    name : 'monitor',
    price : 550,
    selected : false
  },{id : 3,
    name : 'teclado',
    price : 250,
    selected : false
  },{id : 4,
    name : 'gabinete',
    price : 300,
    selected : false
  },{id : 5,
    name : 'processador',
    price : 1700,
    selected : false
  },{id : 6,
    name : 'pen-drive',
    price : 30,
    selected : false
  },{id : 7,
    name : 'pala-mãe',
    price : 1000,
    selected : false
  },{id : 8,
    name : 'switch',
    price : 80,
    selected : false
  }
];

  constructor(
    private router: Router,
    private dataService: ProductOrderService,
  ) {}

  ngOnInit(): void {
    console.log(this.product);
  }

  addItem(newOrder: Row[]) {
    this.total = 0;
    this.order = newOrder;
    newOrder.map(order => {this.total += order.price || 0})
  }
  addProduct(newProduct: Row){
    const sortedRows = this.product.map(product => product.id);
    sortedRows.sort((a, b) => b - a);
    // const sortedRows = this.product.sort((a, b) => b.id - a.id);
    const newID = sortedRows[0] + 1;
    newProduct.id = newID;
    this.product.push(newProduct);
  }
  confirm(){
    const products : ProductInterface[] = this.order.map(a => a) as ProductInterface[];
    const order : OrderInterface = {
      id : 0,
      clients : [],
      products,
      total : this.total
    };
    this.dataService.changeOrder(order);
     this.router.navigate(['product/saleConfirm']);

  }

}
