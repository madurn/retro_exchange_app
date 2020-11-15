import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { GameProduct } from './game-product'
import { CartItem } from './cart-item'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private gameProductsUrl = 'http://localhost:5000/api/GameProducts';

  private cartItemsUrl = 'http://localhost:5000/api/CartItems';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addCartItem(cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.cartItemsUrl, cartItem, this.httpOptions)
      .pipe(
        catchError(this.handleError<CartItem>('addCartItem'))
    );
  }

  //TODO: add function to delete cart item from database

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemsUrl)
      .pipe(
        catchError(this.handleError<CartItem[]>('getCartItems', []))
    );
  }

  deleteCartItem(cartItem: CartItem | number): Observable<CartItem> {
    const id = typeof cartItem === 'number' ? cartItem : cartItem.id;
    const url = `${this.cartItemsUrl}/${id}`;
    return this.http.delete<CartItem>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<CartItem>('deleteCartItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }


  /*
  checkItems() {
    window.alert(this.items[0]);
  }
  */

  //private gameProductsUrl = 'http://localhost:5000/api/GameProducts';

  /*
  private cartItemsUrl = 'http://localhost:5000/api/CartItems';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addCartItem(cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.cartItemsUrl, cartItem, this.httpOptions)
      .pipe(
        catchError(this.handleError<CartItem>('addCartItem'))
    );
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.cartItemsUrl)
      .pipe(
        catchError(this.handleError<CartItem[]>('getCartItems', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  */
}
