import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NesProductsComponent } from './nes-products/nes-products.component';
import { MasterSystemProductsComponent } from './master-system-products/master-system-products.component';
import { SnesProductsComponent } from './snes-products/snes-products.component';
import { GenesisProductsComponent } from './genesis-products/genesis-products.component';
import { GameProductDetailComponent } from './game-product-detail/game-product-detail.component';
import { CartComponent } from './cart/cart.component';
import { SellComponent } from './sell/sell.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: 'master-system-products', component: MasterSystemProductsComponent},
  {path: 'nes-products', component: NesProductsComponent},
  {path: 'snes-products', component: SnesProductsComponent},
  {path: 'genesis-products', component: GenesisProductsComponent},
  {path: 'game-product-detail/:id', component: GameProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'sell', component: SellComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

