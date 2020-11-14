import { Component, OnInit } from '@angular/core';
import { GameProductService } from '../game-product.service'

import { GameProduct } from '../game-product'

@Component({
  selector: 'app-genesis-products',
  templateUrl: './genesis-products.component.html',
  styleUrls: ['./genesis-products.component.css']
})
export class GenesisProductsComponent implements OnInit {

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
