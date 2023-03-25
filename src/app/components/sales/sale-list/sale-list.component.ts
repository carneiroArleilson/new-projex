import { Row } from './../../core/interface/row.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

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

}
