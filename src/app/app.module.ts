import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameProductsComponent } from './game-products/game-products.component';
import { GameProductDetailComponent } from './game-product-detail/game-product-detail.component';
import { GenesisProductsComponent } from './genesis-products/genesis-products.component';
import { GenesisProductDetailComponent } from './genesis-product-detail/genesis-product-detail.component';
import { SnesProductsComponent } from './snes-products/snes-products.component';
import { SnesProductDetailComponent } from './snes-product-detail/snes-product-detail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    GameProductsComponent,
    GameProductDetailComponent,
    GenesisProductsComponent,
    GenesisProductDetailComponent,
    SnesProductsComponent,
    SnesProductDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }