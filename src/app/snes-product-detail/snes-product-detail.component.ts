import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {GameProductService} from '../game-product.service';
import { CartService } from '../cart.service'

import { GameProduct } from '../game-product'

@Component({
  selector: 'app-snes-product-detail',
  templateUrl: './snes-product-detail.component.html',
  styleUrls: ['./snes-product-detail.component.css']
})
export class SnesProductDetailComponent implements OnInit {

  gameProduct: GameProduct;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private gameProductService: GameProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGameProduct();
  }

  getGameProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameProductService.getGameProduct(id)
      .subscribe(gameProduct=>this.gameProduct = gameProduct);
  }

  addToCart(product) {
    this.cartService.addCartItem(product);
    window.alert('Your product has been added to the cart!');
  }

  goBack(): void {
    this.location.back();
  }

}

/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snes-product-detail',
  templateUrl: './snes-product-detail.component.html',
  styleUrls: ['./snes-product-detail.component.css']
})
export class SnesProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

*/
