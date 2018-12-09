import { Component, OnInit } from '@angular/core';
import { ManageProjectService } from '../manage-project.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectOverview, ProjectAccount } from '../manage-project.models';
import { ManageAccount } from '../../manage-account/manage-account.models';

@Component({
    selector: 'admin-manage-project-detail',
    templateUrl: './manage-project-detail.component.html',
    styleUrls: [
        './manage-project-detail.component.scss'
    ]
})

export class AdminManageProjectDetailComponent implements OnInit {
    
    dataLoaded: boolean = false;

    projectId: number;

    project: ProjectOverview;
    projectAccounts: Array<ProjectAccount> = [];
    accounts: Array<ManageAccount> = [];
    accountsView: Array<ManageAccount> = [];
    
    constructor(
        private manageProjectService: ManageProjectService,
        private activatedRoute: ActivatedRoute
    ) {
        this.projectId = this.activatedRoute.snapshot.params['projectId'];
    }
    
    ngOnInit(): void {
        this.manageProjectService.getProjectDetails(this.projectId).subscribe(res => {
            this.project = res['result']['details']['project'];
            this.projectAccounts = res['result']['details']['projectAccounts'];
            this.accounts = res['result']['listUser'];
            this.project.numberOfMember = this.projectAccounts.length;
            this.calculateAccountsView();
            this.dataLoaded = true;
        });
    }

    calculateAccountsView(): void {
        this.accountsView = this.accounts.filter(ac => this.projectAccounts.findIndex(a=>a.id== ac.id) < 0);
    }

    addToThisProject(id: number): void {
        this.manageProjectService.addMember(this.projectId, id).subscribe(res => {
            if(res['success']) {
                var account = this.accountsView[this.accountsView.findIndex(a => a.id == id)];
                this.projectAccounts.push({   
                    id: account.id,
                    firstName: account.firstName,
                    emai: account.email,
                    lastName: account.lastName
                });
                this.calculateAccountsView();
            }
            else {
                alert('error');
            }
        });
    }

    removeUser(id: number): void {
        this.manageProjectService.removeMember(this.projectId, id).subscribe(res => {
            if(res['success']) {
                var index = this.projectAccounts.findIndex(a => a.id == id);
                if(index > -1)
                    this.projectAccounts.splice(index, 1);
                this.calculateAccountsView();
            }
            else {
                alert('error');
            }
        });
    }
    
}