import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Row } from '../../interface/row.interface';

const DEFAULT_PRODUCT: Row = {
  id: 0,
  name: '',
  price: 0,
  selected: false,
};

@Component({
  selector: 'app-modal-create-product',
  templateUrl: './modal-create-product.component.html',
  styleUrls: ['./modal-create-product.component.css'],
})
export class ModalCreateProductComponent implements OnInit {
  @Output() newProductEvent = new EventEmitter();


  product: Row = { ...DEFAULT_PRODUCT };
  rows: Row[] = [];

  constructor() {}

  ngOnInit(): void {
    this.product = { ...DEFAULT_PRODUCT };
  }

  incluirProduto() {

      this.newProductEvent.emit(this.product);
      this.product = { ...DEFAULT_PRODUCT };
  }

}
