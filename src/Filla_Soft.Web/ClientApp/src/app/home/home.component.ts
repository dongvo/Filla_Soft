import { Component, OnInit } from '@angular/core';
import { AccountService, LoginControlService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:[
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private accountService: AccountService,
    private loginControl: LoginControlService
  ){

  }

  ngOnInit(): void {
    this.accountService.onLoginSuccess.subscribe(res => {
      if(res) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    })
  }

}
