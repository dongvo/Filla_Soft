import { Component } from '@angular/core';
import { AppCommonService } from '../../app-common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-project-layout',
    templateUrl: './project-layout.component.html',
    styleUrls: [
        './project-layout.component.scss'
    ]
})

export class ProjectLayoutComponent {
    
    useSidebarMini: boolean = false;

    menuItems: any[];

    listProject: Array<Project> = [];

    constructor(
      private appCommonService: AppCommonService,
      private route: ActivatedRoute
    ){
      
    }
    ngOnInit(): void {
        this.getListProject();
        
        this.route.params.subscribe(params =>{
            let projectId: any = params['projectId'];
      
            this.menuItems = [
              { path: ['/project', projectId], title: 'Dashboard',  icon: 'dashboard', class: '' , exact: true},
              { path: ['/project', projectId, 'board'], title: 'Board',  icon: 'assessment', class: '' , exact: true},
              { path: ['/project', projectId, 'issues'], title: 'Issues',  icon:'playlist_add_check', class: '' , exact: false}
            ]
          })

        this.appCommonService.useSidebarMini.subscribe(res => {
            this.useSidebarMini = Boolean(res);
        });
    }

        
    getListProject(): void {
        this.listProject = [
            {id: 1, name: 'Project 1'},
            {id: 2, name: 'Project 2'},
            {id: 3, name: 'Project 3'}
        ]
    }
}

export class Project {
    id: number;
    name: string;
}