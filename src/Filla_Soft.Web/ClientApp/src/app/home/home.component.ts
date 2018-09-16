import { Component, OnInit } from '@angular/core';
import { AccountService, LoginControlService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  hasLoggedIn: boolean = false;

  constructor(
    private accountService: AccountService,
    private loginControl: LoginControlService
  ){

  }

  ngOnInit(): void {
    this.accountService.onLoginSuccess.subscribe(res => {
      if(res) {

      }
      else {
        this.loginControl.openLogin();
      }
    })
  }

}
