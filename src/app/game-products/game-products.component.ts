import { Component, OnInit } from '@angular/core';

import {GameProductService} from '../game-product.service'

import { Game } from '../game-product';
import { GameConsole } from '../game-product'
//import { SNESGAMES } from '../mock-game-products'
//import { SNESCONSOLES} from '../mock-game-products'

//******TODO: this compooent will be used for home page view*******

@Component({
  selector: 'app-game-products',
  templateUrl: './game-products.component.html',
  styleUrls: ['./game-products.component.css']
})

export class GameProductsComponent implements OnInit {
  snesGames: Game[];
  snesConsoles: GameConsole[];

  //selectedGame: Game;
  //selectedConsole: GameConsole;

  constructor(private gameProductService: GameProductService) { }


  ngOnInit(): void {
    //
  }

  getGameProducts(): void {
    //this.snesConsoles = this.gameProductService.getConsoles();
    //this.snesGames = this.gameProductService.getGames();
  }


  /*
  onSelectGame(game: Game): void {
    this.selectedGame = game;
  }

  onSelectConsole(console: GameConsole): void {
    this.selectedConsole = console;
  }
  */

}
