import { Component, OnInit } from '@angular/core';
import { ManageAccountService } from './manage-account.service';

@Component({
    selector: 'admin-manage-account',
    templateUrl: './manage-account.component.html',
    styleUrls: [
        './manage-account.component.scss'
    ]
})

export class AdminManageAccountComponent implements OnInit {
    
    constructor(
        private manageAccountService: ManageAccountService
    ){

    }

    ngOnInit(): void {
        this.manageAccountService.getAllAccount().subscribe(res => {
            console.log(res);
        })
    }

}