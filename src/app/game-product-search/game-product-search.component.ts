import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { GameProductService } from '../game-product.service'
import { GameProduct } from '../game-product'

@Component({
  selector: 'app-game-product-search',
  templateUrl: './game-product-search.component.html',
  styleUrls: ['./game-product-search.component.css']
})
export class GameProductSearchComponent implements OnInit {
  gameProducts$: Observable<GameProduct[]>;
  private searchTerms = new Subject<string>();

  constructor(private gameProductService: GameProductService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.gameProducts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.gameProductService.searchGameProducts(term)),
    );
  }
}
