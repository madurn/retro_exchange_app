import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SellItem } from './sell-item';


@Injectable({
  providedIn: 'root'
})
export class SellService {
  private sellItemsUrl = 'http://localhost:5000/api/SellItems';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addSellItem(sellItem: SellItem): Observable<SellItem> {
    return this.http.post<SellItem>(this.sellItemsUrl, sellItem, this.httpOptions)
    .pipe(catchError(this.handleError<SellItem>('addSellItem'))
    );
  }

  getSellItems(): Observable<SellItem[]> {
    // TODO: send the message _after_ fetching the capitals
    return this.http.get<SellItem[]>(this.sellItemsUrl)
    .pipe(
      catchError(this.handleError<SellItem[]>('getSellItems', []))
    );
  }

  deleteSellItem(sellItem: SellItem | number): Observable<SellItem> {
    const id = typeof sellItem === 'number' ? sellItem : sellItem.id;
    const url = `${this.sellItemsUrl}/${id}`;
    return this.http.delete<SellItem>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<SellItem>('deleteSellItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }


}
