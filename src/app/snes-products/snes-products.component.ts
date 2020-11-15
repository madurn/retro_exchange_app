import { Component, OnInit } from '@angular/core';
import { GameProductService } from '../game-product.service'
import { CartService } from '../cart.service'

import { GameProduct } from '../game-product'

@Component({
  selector: 'app-snes-products',
  templateUrl: './snes-products.component.html',
  styleUrls: ['./snes-products.component.css']
})
export class SnesProductsComponent implements OnInit {

  gameProducts: GameProduct[];

  constructor(
    private gameProductService: GameProductService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getGameProducts();
  }

  getGameProducts(): void {
    this.gameProductService.getGameProducts()
    .subscribe(gameProducts => this.gameProducts = gameProducts);
  }

  addToCart(product) {
    this.cartService.addCartItem(product);
    window.alert('Your product has been added to the cart!');
  }

}
