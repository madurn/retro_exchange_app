import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service'

import { Account } from '../account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  //accounts: Account[];
  account: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    //this.getAccounts();
    this.getAccount()
  }

  /*
  getAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }
  */

  getAccount(): void {
    const id = 1
    this.accountService.getAccount(id)
    .subscribe(account => this.account = account);
  }


  save(): void {
    this.accountService.updateAccount(this.account)
      .subscribe();
      window.alert('Your account has been updated!');
  }



}
