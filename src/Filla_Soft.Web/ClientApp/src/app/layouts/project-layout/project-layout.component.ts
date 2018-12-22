import { Component } from '@angular/core';
import { AppCommonService } from '../../app-common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'app/core/services';
import { SimpleNotificationsService } from 'app/core/notifications';

@Component({
    selector: 'app-project-layout',
    templateUrl: './project-layout.component.html',
    styleUrls: [
        './project-layout.component.scss'
    ]
})

export class ProjectLayoutComponent {
    
    useSidebarMini: boolean = false;

    projectId: number;

    menuItems: any[];

    listProject: Array<Project> = [];

    constructor(
      private appCommonService: AppCommonService,
      private accountService: AccountService,
      private route: ActivatedRoute,
      private router: Router,
      private simpleNotificationService: SimpleNotificationsService
    ){
      
    }
    ngOnInit(): void {
        this.route.params.subscribe(params =>{
            let projectId: any = params['projectId'];
            this.projectId = projectId;
            this.getListProject();
        
            
            this.menuItems = [
                { path: ['/project', projectId], title: 'Dashboard',  icon: 'dashboard', class: '' , exact: true},
                {
                    path: ['/project', projectId, 'issues'], title: 'Issues',  icon:'playlist_add_check', class: '' , exact: false,
                    routeChild :[
                        { path: ['/project', projectId, 'issues', 'list'], title: 'List',  icon:'playlist_add_check', class: '' , acronyms: 'L', exact: true },
                        { path: ['/project', projectId, 'issues', 'board'], title: 'Board',  icon:'playlist_add_check', class: '' , acronyms: 'B', exact: true },
                        { path: ['/project', projectId, 'issues', 'setting'], title: 'Setting',  icon:'playlist_add_check', class: '' , acronyms: 'S', exact: true }
                    ]
                }
            ]
        });

        this.appCommonService.useSidebarMini.subscribe(res => {
            this.useSidebarMini = Boolean(res);
        });
    }

        
    getListProject(): void {
        this.accountService.projectsData.subscribe(res => {
            if(res) {
                this.listProject = res['projects'] || new Array();
                if(this.listProject.findIndex(p => p.id == this.projectId) <0) {
                    this.router.navigate(['/']);
                    this.simpleNotificationService.error("Error", "You are not assigned to this project");
                }
            }
          });
    }
}

export class Project {
    id: number;
    name: string;
}