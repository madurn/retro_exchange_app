import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

import { GameProduct } from '../game-product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }


  /*
  ngOnInit(): void {
    this.getItems()
  }

  getItems(): void {
    this.items = this.cartService.getItems()
  }
  */

}
