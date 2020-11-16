import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {GameProductService} from '../game-product.service';
import { CartService } from '../cart.service'

import { GameProduct } from '../game-product'
import { CartItem } from '../cart-item'

@Component({
  selector: 'app-game-product-detail',
  templateUrl: './game-product-detail.component.html',
  styleUrls: ['./game-product-detail.component.css']
})
export class GameProductDetailComponent implements OnInit {
  gameProduct: GameProduct;

  cartItems: CartItem[];

  cartItem: CartItem;

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
      .subscribe(gameProduct=>this.gameProduct = gameProduct)
  }

  createCartItem() {
    let cartItem: CartItem = {
      retexId: this.gameProduct.id,
      name: this.gameProduct.name,
      price: this.gameProduct.price,
      condition: this.gameProduct.condition,
      type: this.gameProduct.type,
      console: this.gameProduct.console,
      year: this.gameProduct.year,
      imageLocation: this.gameProduct.imageLocation
    }
    return cartItem;
  }

  addToCart(): void {
    let cartItem: CartItem;
    cartItem = this.createCartItem();
    this.add(cartItem);
  }

 add(cartItem: CartItem): void {
  this.cartService.addCartItem(cartItem)
    .subscribe(cartItem => {
      this.cartItems.push(cartItem);
    });
    window.alert('The product has been added to the cart!');
  }

  goBack(): void {
    this.location.back();
  }

}
