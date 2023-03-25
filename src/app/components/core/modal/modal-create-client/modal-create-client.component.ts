import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Row } from '../../interface/row.interface';

const DEFAULT_CLIENTS: Row = {
  id: 0,
  name: '',
  cpf: '',
  birth: new Date(''),
  email: '',
  phone: '',
  selected: false
};

@Component({
  selector: 'app-modal-create-client',
  templateUrl: './modal-create-client.component.html',
  styleUrls: ['./modal-create-client.component.css'],
})
export class ModalCreateClientComponent implements OnInit {
  @Output() newClientsEvent = new EventEmitter();

  clients: Row = { ...DEFAULT_CLIENTS };
  rows: Row[] = [];

  constructor() {}

  ngOnInit(): void {
    this.clients = { ...DEFAULT_CLIENTS };
  }

  incluirProduto() {
    this.newClientsEvent.emit(this.clients);
    this.clients = { ...DEFAULT_CLIENTS };
  }
}
