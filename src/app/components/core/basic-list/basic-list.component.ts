import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { Row } from '../interface/row.interface';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css'],
})
export class BasicListComponent implements OnInit {
  @Input() colunms: string[] = [];
  @Input() rows: Row[] = [];
  @Input() count = "";

  @Output() newOrderEvent = new EventEmitter<Row[]>();


  // criar novo metodo ex.: changeRow -
  //alterar o selected de linha selecionada,
  //de true pra false e de false pra true
  //e depois emitir as linhas

  emitRows() {
    //trocar a declaração de function pra arrow function

    // const selectedRows = this.rows.filter(function(row){
    //   return row.selected;
    // });
    const selectedRows = this.rows.filter((row) => row.selected);
    this.newOrderEvent.emit(selectedRows);
  }

  reverse(id: number) {
    // this.rows.map((row) => {
    //   if (row.id == id) row.selected = !row.selected;
    // });

    const indexSelectedRow = this.rows.findIndex(row => row.id == id);
    this.rows[indexSelectedRow].selected = !this.rows[indexSelectedRow].selected;

    this.emitRows();
  }

  constructor() {}

  ngOnInit(): void {}
}
