import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountsUrl = 'http://localhost:5000/api/Accounts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl)
      .pipe(
        catchError(this.handleError<Account[]>('getAccounts', []))
    );
  }

  getAccount(id: number): Observable<Account> {
    const url = `${this.accountsUrl}/${id}`;
    return this.http.get<Account>(url)
      .pipe(
        catchError(this.handleError<Account>(`getAccount id=${id}`))
    );
  }

  updateAccount(account: Account): Observable<any> {
    return this.http.put(this.accountsUrl, account, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('updateAccount'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
