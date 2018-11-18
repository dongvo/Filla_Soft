import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppCommonService } from './app-common.service';
import { AccountService, LoginControlService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  
  title = 'app';

  useSidebarMini: boolean = false;

  simpleNotificationOptions: any = {
    position: ['top', 'right'],
    timeOut: 5000,
    lastOnBottom: true
  };

  constructor(
    private appCommonService: AppCommonService,
    private accountService: AccountService,
    private loginControl: LoginControlService
  ){
    
  }

  ngOnInit(): void {
    this.appCommonService.useSidebarMini.subscribe(res => {
      this.useSidebarMini = Boolean(res);
    });
this.checkLogin();
    
  }

  checkLogin(): void {
    this.accountService.checkLoggedIn().subscribe( res => {
      if( res && Boolean(res['isLoggedIn'])) {
        let user: any = res['user'];
        this.accountService.setSession(user, res['data']);
      }
      else {
        this.loginControl.openLogin();
      }
    });
  }

}
