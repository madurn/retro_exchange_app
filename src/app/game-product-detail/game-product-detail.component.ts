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

  /* WORKS */
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

/*
  cartItemTest: CartItem = {
    retexId: 123,
    name: "Test",
    price: 9.99,
    condition: "Good",
    type: "Game",
    console: "Super Nintendo",
    year: 1992,
    imageLocation: "none"
  }

 createCartItem() {
    this.cartItem.id = this.gameProduct.id
    this.cartItem.retexId = this.gameProduct.id;
    this.cartItem.name = this.gameProduct.name;
    this.cartItem.price = this.gameProduct.price;
    this.cartItem.condition = this.gameProduct.condition;
    this.cartItem.type = this.gameProduct.type;
    this.cartItem.console = this.gameProduct.console;
    this.cartItem.year = this.gameProduct.year;
    this.cartItem.imageLocation = this.gameProduct.imageLocation;
  }
  */

  /*
  addToCart(product) {
    this.cartService.addCartItem({ name } as CartItem);
    window.alert('Your product has been added to the cart!');
  }

   addToCart(): void {
    let cartItem: CartItem;
    cartItem = this.createCartItem();
    this.add(this.cartItemTest);
    this.add(cartItem);
    window.alert('addToCart() works!');
  }

  WORKS
 add(cartItem: CartItem): void {
  this.cartService.addCartItem(cartItem)
    .subscribe(cartItem => {
      this.cartItems.push(cartItem);
    });
    window.alert('Your product has been added to the cart!');
  }
*/
