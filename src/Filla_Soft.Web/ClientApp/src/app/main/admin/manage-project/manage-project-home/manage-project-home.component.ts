import { Component, OnInit } from '@angular/core';
import { ProjectOverview } from '../manage-project.models';

@Component({
    selector: 'admin-manage-project-home',
    templateUrl: './manage-project-home.component.html',
    styleUrls: [
        './manage-project-home.component.scss'
    ]
})

export class AdminManageProjectHomeComponent implements OnInit {
    
    listProject: Array<ProjectOverview>;
    listProjectView: Array<ProjectOverview>;
    listProjectSortType: string = '';

    //search
    searchValue: string = '';
    constructor(){

    }

    ngOnInit(): void {
        this.getListProject();
    }

    getListProject(): void {
        this.listProject = new Array();
        this.listProjectView = new Array();

        this.listProject = [
            {
                id: 1,
                name: 'Peroject 1',
                isDeleted: false,
                numberOfMember: 6
            },
            {
                id: 2,
                name: 'Peroject 2',
                isDeleted: true,
                numberOfMember: 7
            },
            {
                id: 3,
                name: 'Peroject 3',
                isDeleted: false,
                numberOfMember: 4
            },
            {
                id: 4,
                name: 'Peroject 1 asa',
                isDeleted: false,
                numberOfMember: 5
            }
        ]

        // this.listProjectView = JSON.parse(JSON.stringify(this.listProject));]
        this.listProjectView = this.listProject;
        this.sortProjectsListById();
    }

    sortProjectsListById(): void {
        if ( this.listProjectSortType != ListProjectSortType.ID_ASC) {
            this.listProjectSortType = ListProjectSortType.ID_ASC;
            this.listProjectView = this.listProjectView.sort( (a: ProjectOverview, b: ProjectOverview) => {
                if (a.id < b.id) return -1;
                else if (a.id > b.id) return 1;
                else return 0;
            });
        }
        else {
            this.listProjectSortType = ListProjectSortType.ID_DESC;
            this.listProjectView = this.listProjectView.sort( (a: ProjectOverview, b: ProjectOverview) => {
                if (a.id > b.id) return -1;
                else if (a.id < b.id) return 1;
                else return 0;
            });
        }
    }

    sortProjectsListByName(): void {
        if ( this.listProjectSortType != ListProjectSortType.NAME_ASC) {
            this.listProjectSortType = ListProjectSortType.NAME_ASC;
            this.listProjectView.sort( (a: ProjectOverview, b: ProjectOverview) => {
                return ('' + a.name).localeCompare(b.name);
            })
        }
        else {
            this.listProjectSortType = ListProjectSortType.NAME_DESC;
            this.listProjectView.sort( (a: ProjectOverview, b: ProjectOverview) => {
                return ('' + b.name).localeCompare(a.name);
            })
        }
    }


    searchProject(): void {
        console.log('sea')
        if(this.searchValue == '') {
            this.listProjectView = this.listProject;
            this.listProjectSortType = '';
            this.sortProjectsListById();
        }
        else {
            this.listProjectView = this.listProject.filter((a) => {
                return (a.name.toLocaleLowerCase().indexOf(this.searchValue.toLocaleLowerCase()) > -1);
            })
        }
    }

}

const ListProjectSortType: any = {
    ID_ASC: 'id_asc',
    ID_DESC: 'id_desc',
    NAME_ASC: 'name_asc',
    NAME_DESC: 'name_desc'
}
