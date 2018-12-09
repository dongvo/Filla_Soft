import { Component, OnInit } from '@angular/core';
import { ManageAccountService } from '../manage-account.service';
import { ManageAccount } from '../manage-account.models';

@Component({
    selector: 'admin-manage-account-list',
    templateUrl: './manage-account-list.component.html',
    styleUrls: [
        './manage-account-list.component.scss'
    ]
})

export class AdminManageAccountListComponent implements OnInit {

    accounts: Array<ManageAccount> = [];

    
    constructor(
        private manageAccountService: ManageAccountService
    ){

    }

    ngOnInit(): void {
        this.manageAccountService.getAllAccount().subscribe(res => {
            this.accounts = res['result'];
        })
    }

}