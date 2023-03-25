import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SaleConfirmComponent } from './components/sales/sale-confirm/sale-confirm.component';
import { SaleListComponent } from './components/sales/sale-list/sale-list.component';
import { BasicListComponent } from './components/core/basic-list/basic-list.component';
import { ModalCreateClientComponent } from './components/core/modal/modal-create-client/modal-create-client.component';
import { ModalCreateProductComponent } from './components/core/modal/modal-create-product/modal-create-product.component';
import { ModalConfirmOrderComponent } from './components/core/modal/modal-confirm-order/modal-confirm-order.component';
import { ModalRemoveProductComponent } from './components/core/modal/modal-remove-product/modal-remove-product.component';
import { NavComponent } from './components/core/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientsComponent,
    SaleConfirmComponent,
    SaleListComponent,
    BasicListComponent,
    ModalCreateClientComponent,
    ModalCreateProductComponent,
    ModalConfirmOrderComponent,
    ModalRemoveProductComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
