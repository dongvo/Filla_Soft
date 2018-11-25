import { Component, OnInit } from '@angular/core';
import { ManageProjectService } from '../manage-project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'admin-manage-project-detail',
    templateUrl: './manage-project-detail.component.html',
    styleUrls: [
        './manage-project-detail.component.scss'
    ]
})

export class AdminManageProjectDetailComponent implements OnInit {
    
    projectId: number;

    constructor(
        private manageProjectService: ManageProjectService,
        private activatedRoute: ActivatedRoute
    ) {
        this.projectId = this.activatedRoute.snapshot.params['projectId'];
    }
    
    ngOnInit(): void {
        this.manageProjectService.getProjectDetails(this.projectId).subscribe(res => {
            console.log(res);
        });
    }

    
}