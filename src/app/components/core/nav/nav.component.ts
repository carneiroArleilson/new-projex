import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  products(){
    this.router.navigate(['product']);
  }

  clients(){
    this.router.navigate(['client']);
  }

  sales(){
    this.router.navigate(['sale']);
  }

}
