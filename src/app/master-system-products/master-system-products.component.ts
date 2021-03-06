import { Component, OnInit } from '@angular/core';

import { GameProductService } from '../game-product.service'

import { GameProduct } from '../game-product'

@Component({
  selector: 'app-master-system-products',
  templateUrl: './master-system-products.component.html',
  styleUrls: ['./master-system-products.component.css']
})

export class MasterSystemProductsComponent implements OnInit {
  gameProducts: GameProduct[];

  constructor(
    private gameProductService: GameProductService) { }

  ngOnInit(): void {
    this.getGameProducts();
  }

  getGameProducts(): void {
    this.gameProductService.getGameProducts()
    .subscribe(gameProducts => this.gameProducts = gameProducts);
  }

}
