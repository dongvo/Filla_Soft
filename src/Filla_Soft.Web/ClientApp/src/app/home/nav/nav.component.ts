import  { Component } from '@angular/core';
import { AccountService } from 'app/core/services';

@Component({
    selector: 'app-home-nav',
    templateUrl: './nav.component.html',
    styleUrls: [
        './nav.component.scss'
    ]
})

export class HomeNavComponent {
    constructor (
        private accountService: AccountService
    ){
        
    }

    logout(): void {
        this.accountService.logout();
    }
}