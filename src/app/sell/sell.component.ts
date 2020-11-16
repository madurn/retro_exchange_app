import { Component, OnInit } from '@angular/core';

import { SellService } from '../sell.service'
import { SellItem } from '../sell-item';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {
  sellItems: SellItem[];

  constructor(private sellService: SellService) { }

  ngOnInit(): void {
    this.getSellItems();
  }

  getSellItems(): void {
    this.sellService.getSellItems()
      .subscribe(sellItems => this.sellItems = sellItems);
  }

  add(name: string, console: string, type: string, condition: string): void {
    name = name.trim();
    if (!name) { return; }
    console = console.trim();
    if (!console) { return; }
    type = type.trim();
    if (!type) { return; }
    condition = condition.trim();
    if (!condition) { return; }
    this.sellService.addSellItem({ name, console, type, condition } as SellItem)
      .subscribe(sellItem => {
        this.sellItems.push(sellItem);
      });
    window.alert('Your offer has been submitted for approval!');
  }

  delete(sellItem: SellItem): void {
    this.sellItems = this.sellItems.filter(h => h !== sellItem);
    this.sellService.deleteSellItem(sellItem).subscribe();
  }

}
