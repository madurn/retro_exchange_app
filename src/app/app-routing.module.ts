import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnesProductsComponent } from './snes-products/snes-products.component';
import { SnesProductDetailComponent } from './snes-product-detail/snes-product-detail.component';
import { GenesisProductsComponent } from './genesis-products/genesis-products.component';
import { GenesisProductDetailComponent } from './genesis-product-detail/genesis-product-detail.component';
import { GameProductDetailComponent } from './game-product-detail/game-product-detail.component';
import { CartComponent } from './cart/cart.component';
import { SellComponent } from './sell/sell.component';



const routes: Routes = [
  {path: 'snes-products', component: SnesProductsComponent}, //SNES
  {path: 'snes-product-detail/:id', component: SnesProductDetailComponent}, //SNES
  {path: 'genesis-products', component: GenesisProductsComponent},
  {path: 'genesis-product-detail/:id', component: GenesisProductDetailComponent},
  {path: 'game-product-detail/:id', component: GameProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'sell', component: SellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameProductsComponent } from './game-products/game-products.component' //SNES
import { GameProductDetailComponent } from './game-product-detail/game-product-detail.component' //SNES
import { GenesisProductsComponent } from './genesis-products/genesis-products.component' //SNES
import { GenesisProductDetailComponent } from './genesis-product-detail/genesis-product-detail.component' //SNES


const routes: Routes = [
  {path: 'snes-products', component: GameProductsComponent}, //SNES
  {path: 'snes-product-detail/:id', component: GameProductDetailComponent}, //SNES
  {path: 'genesis-products', component: GenesisProductsComponent},
  {path: 'genesis-product-detail/:id', component: GenesisProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
