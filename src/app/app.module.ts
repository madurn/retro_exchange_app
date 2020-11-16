import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameProductsComponent } from './game-products/game-products.component';
import { GameProductDetailComponent } from './game-product-detail/game-product-detail.component';
import { GenesisProductsComponent } from './genesis-products/genesis-products.component';
import { SnesProductsComponent } from './snes-products/snes-products.component';
import { CartComponent } from './cart/cart.component';
import { SellComponent } from './sell/sell.component';
import { MasterSystemProductsComponent } from './master-system-products/master-system-products.component';
import { NesProductsComponent } from './nes-products/nes-products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    GameProductsComponent,
    GameProductDetailComponent,
    GenesisProductsComponent,
    SnesProductsComponent,
    CartComponent,
    SellComponent,
    MasterSystemProductsComponent,
    NesProductsComponent,
    HomePageComponent,
    AccountComponent
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
