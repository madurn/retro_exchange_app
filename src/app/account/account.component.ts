import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service'

import { Account } from '../account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts: Account[];
  account: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
    this.getAccount()
  }


  getAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }


  getAccount(): void {
    const id = 1
    this.accountService.getAccount(id)
    .subscribe(account => this.account = account);
  }


  saveAccount(): void {
    this.accountService.updateAccount(this.account).subscribe(account => {this.accounts.push(account)});
    window.alert('Your account has been updated!');
    //this.save(this.account);
    //window.alert(this.account.firstName);
    //window.alert('Your account has been updated!');
  }

  /*
  save(account: Account): void {
    this.accountService.updateAccount(account).subscribe(account => {this.accounts.push(account)});
  }
  */
    /*

    .subscribe(account => {
      this.accounts.push(account);
    });
    //window.alert('Your account has been updated!');
    //this.accountService.addAccount(account)
      //.subscribe(account => {
        //this.accounts.push(account);
      //});;
    window.alert('Third window!');
  }
  */

  /*
  createAccountUpdate() {
    let account: Account = {
      id: this.account.id,
      firstName: this.account.firstName,
      lastName: this.account.lastName,
      dateOfBirth: this.account.dateOfBirth,
      address: this.account.address,
      city: this.account.city,
      state: this.account.state,
      zipCode: this.account.zipCode,
      phone: this.account.phone,
      email: this.account.email,
      password: this.account.password,
      cardName: this.account.cardName,
      cardNumber: this.account.cardNumber,
      expirationDate: this.account.expirationDate,
      cVV: this.account.cVV,
      cardAddress: this.account.cardAddress,
      cardCity: this.account.cardCity,
      cardState: this.account.cardState,
      cardZipCode: this.account.cardZipCode,
      cardPhone: this.account.cardPhone
    }
    return account;
  }

  /*
    let account: Account;
    account = this.createAccountUpdate();
    //this.accountService.updateAccount(account)
      //.subscribe();
    */


}
