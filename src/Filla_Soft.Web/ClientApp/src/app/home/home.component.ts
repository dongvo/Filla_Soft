import { Component, OnInit } from '@angular/core';
import { AccountService, LoginControlService, RoleService } from '../core/services';
import { Project } from 'app/app.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:[
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;

  isAdmin: boolean = false;

  isUser: boolean = false;

  projects: Array<Project> = new Array();
  

  constructor(
    private roleService: RoleService,
    private accountService: AccountService,
    private loginControl: LoginControlService
  ){

  }

  ngOnInit(): void {
    this.roleService.isAdmin.subscribe(res => {
      if(res) this.isAdmin = true;
      else this.isAdmin = false;
    });

    this.roleService.isUser.subscribe(res => {
      if(res) this.isUser = true;
      else this.isUser = false;
    });

    this.accountService.onLoginSuccess.subscribe(res => {
      if(res) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    });

    this.accountService.projectsData.subscribe(res => {
      if(res) {
        console.log(res);
        this.projects = res['projects'] || new Array();
      }
    })
  }
  
  normalizeData(): void {

  }

}
