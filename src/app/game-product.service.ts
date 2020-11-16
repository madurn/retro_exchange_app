import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { GameProduct } from './game-product'

@Injectable({
  providedIn: 'root'
})
export class GameProductService {

  private gameProductsUrl = 'http://localhost:5000/api/GameProducts';

  constructor(private http: HttpClient) { }

  getGameProducts(): Observable<GameProduct[]> {
    return this.http.get<GameProduct[]>(this.gameProductsUrl)
      .pipe(
        catchError(this.handleError<GameProduct[]>('getGameProducts', []))
    );
  }

  getGameProduct(id: number): Observable<GameProduct> {
    const url = `${this.gameProductsUrl}/${id}`;
    return this.http.get<GameProduct>(url)
      .pipe(
        catchError(this.handleError<GameProduct>(`getGameProduct id=${id}`))
    );
  }

  searchGameProducts(term: string): Observable<GameProduct[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<GameProduct[]>(`${this.gameProductsUrl}/?name=${term}`)
    .pipe(
      catchError(this.handleError<GameProduct[]>('searchGameProduct', []))
  );
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}



