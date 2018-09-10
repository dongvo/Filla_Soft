import { Component, OnInit } from '@angular/core';
import { AppCommonService } from '../../app-common.service';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: [
        './admin-layout.component.scss'
    ]
})

export class AdminLayoutComponent implements OnInit {
    menuItems: any[];
    useSidebarMini: boolean = false;
    constructor(
        private appCommonService: AppCommonService,
    ){
      
    }
    ngOnInit(): void {
        this.menuItems = [
            { path: ['/manage'], title: 'Dashboard',  icon: 'dashboard', class: '' , exact: true},
            { path: ['/manage', 'project'], title: 'Project',  icon: 'assessment', class: '' , exact: false},
            { path: ['/manage', 'account'], title: 'Account',  icon:'playlist_add_check', class: '' , exact: false}
        ];

        this.appCommonService.useSidebarMini.subscribe(res => {
            this.useSidebarMini = Boolean(res);
        });
    }
}