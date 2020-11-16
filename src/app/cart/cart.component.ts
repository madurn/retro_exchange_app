import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

import { GameProduct } from '../game-product'
import { CartItem } from '../cart-item'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartService.getCartItems()
      .subscribe(cartItems => this.cartItems = cartItems);
  }

  delete(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter(h => h !== cartItem);
    this.cartService.deleteCartItem(cartItem).subscribe();
  }

  getSubtotal(): number {
    let subtotal = 0;
    for (let cartItem of this.cartItems) {
      subtotal += cartItem.price;
    }
    return subtotal;
  }

}
