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

   ////////////////////////////////////////////////////////////////////////////////////

  //KEEP
  getGameProducts(): Observable<GameProduct[]> {
    return this.http.get<GameProduct[]>(this.gameProductsUrl)
      .pipe(
        catchError(this.handleError<GameProduct[]>('getGameProducts', []))
    );
  }

  //KEEP
  getGameProduct(id: number): Observable<GameProduct> {
    const url = `${this.gameProductsUrl}/${id}`;
    return this.http.get<GameProduct>(url)
      .pipe(
        catchError(this.handleError<GameProduct>(`getGameProduct id=${id}`))
    );
  }

  /* GET game products whose name contains search term */
searchGameProducts(term: string): Observable<GameProduct[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<GameProduct[]>(`${this.gameProductsUrl}/?name=${term}`)
    .pipe(
      catchError(this.handleError<GameProduct[]>('searchGameProduct', []))
  );
}

////////////////////////////////////////////////////////////////////////////////////

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}

/*

import { Game } from './game-product';
import { GameConsole } from './game-product'

//import { GENESISGAMES } from './mock-game-products'
//import { GENESISCONSOLES} from './mock-game-products'

 //REMOVE
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl)
      .pipe(
        catchError(this.handleError<Game[]>('getGames', []))
    );
  }

  //REMOVE
  getConsoles(): Observable<GameConsole[]> {
    return this.http.get<GameConsole[]>(this.gameConsolesUrl)
      .pipe(
        catchError(this.handleError<GameConsole[]>('getConsoles', []))
    );
  }

 //REMOVE
  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url)
      .pipe(
        catchError(this.handleError<Game>(`getGame id=${id}`))
    );
  }

  //REMOVE
  getConsole(id: number): Observable<GameConsole> {
    const url = `${this.gameConsolesUrl}/${id}`;
    return this.http.get<GameConsole>(url)
      .pipe(
        catchError(this.handleError<GameConsole>(`getConsole id=${id}`))
    );
  }


*/

