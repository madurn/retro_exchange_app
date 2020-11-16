import { Component, OnInit } from '@angular/core';

import { GameProductService } from '../game-product.service'

import { GameProduct } from '../game-product'

@Component({
  selector: 'app-nes-products',
  templateUrl: './nes-products.component.html',
  styleUrls: ['./nes-products.component.css']
})

export class NesProductsComponent implements OnInit {
  gameProducts: GameProduct[];

  constructor(private gameProductService: GameProductService) { }

  ngOnInit(): void {
    this.getGameProducts();
  }

  getGameProducts(): void {
    this.gameProductService.getGameProducts()
    .subscribe(gameProducts => this.gameProducts = gameProducts);
  }

}
