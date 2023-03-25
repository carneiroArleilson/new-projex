import { Component, OnInit } from '@angular/core';
import { Row } from '../core/interface/row.interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  column = ["id", "nome", "cpf", "nascimento", "email", "telefone", "alteração"]
  count = "clients";
  client: Row[] =[
    {
      id: 1,
      name: 'arleilson',
      cpf: '03309392201',
      email: 'carneiroarleilson@gmail.com',
      birth: new Date,
      phone: '999862022',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(newProduct: Row){
    const sortedRows = this.client.map(client => client.id);
    sortedRows.sort((a, b) => b - a);
    // const sortedRows = this.product.sort((a, b) => b.id - a.id);
    const newID = sortedRows[0] + 1;
    newProduct.id = newID;
    this.client.push(newProduct);
  }

}
