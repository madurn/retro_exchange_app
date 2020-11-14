import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Game } from './game-product';
import { GameConsole } from './game-product'

import { GameProduct } from './game-product'

//import { GENESISGAMES } from './mock-game-products'
//import { GENESISCONSOLES} from './mock-game-products'

@Injectable({
  providedIn: 'root'
})
export class GameProductService {

  private gamesUrl = 'http://localhost:5000/api/Games';
  private gameConsolesUrl = 'http://localhost:5000/api/GameConsoles';
  private gameProductsUrl = 'http://localhost:5000/api/GameProducts';
  /*
  private gamesUrl = 'https://localhost:54506/api/Games';
  private gameConsolesUrl = 'https://localhost:54506/api/GameConsoles';
  */

  constructor(private http: HttpClient) { }

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

  //KEEP
  getGameProducts(): Observable<GameProduct[]> {
    return this.http.get<GameProduct[]>(this.gameProductsUrl)
      .pipe(
        catchError(this.handleError<GameProduct[]>('getGameProducts', []))
    );
  }

  ////////////////////////////////////////////////////////////////////////////////////

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

  //KEEP
  getGameProduct(id: number): Observable<GameProduct> {
    const url = `${this.gameProductsUrl}/${id}`;
    return this.http.get<GameProduct>(url)
      .pipe(
        catchError(this.handleError<GameProduct>(`getGameProduct id=${id}`))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
