import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {GameProductService} from '../game-product.service';
import { Game } from '../game-product';
import { GameConsole } from '../game-product'

@Component({
  selector: 'app-genesis-product-detail',
  templateUrl: './genesis-product-detail.component.html',
  styleUrls: ['./genesis-product-detail.component.css']
})
export class GenesisProductDetailComponent implements OnInit {
  genesisConsole: GameConsole;

  genesisGame: Game;

  constructor(
    private route: ActivatedRoute,
    private gameProductService: GameProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGenesisGame();
    this.getGenesisConsole();
  }

  getGenesisGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameProductService.getGame(id)
      .subscribe(game=>this.genesisGame = game) //?
  }

  getGenesisConsole(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameProductService.getConsole(id)
      .subscribe(gameConsole=>this.genesisConsole = gameConsole) //?
  }

  goBack(): void {
    this.location.back();
  }

}
