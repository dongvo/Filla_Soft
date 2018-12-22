import { Component, OnInit } from '@angular/core';
import { IssueType,  IssueStatus, IssueResolution, IssuePriority } from '../issues.models';
import { IssueTypeFake, IssuePriorityFake, IssueResolutionFake, IssueStatusFake } from '../issues.fake';

@Component({
    selector: 'app-project-issues-setting',
    templateUrl: './issue-setting.component.html',
    styleUrls: [
        './issue-setting.component.scss'
    ]
})

export class IssueSettingComponent implements OnInit {

    issueTypes: Array<IssueType> = [];
    issueStatus: Array<IssueStatus> = [];
    issueResolution: Array<IssueResolution> = [];
    issuePriority: Array<IssuePriority> = [];

    constructor(
        
    ){

    }

    ngOnInit(): void {
        this.issueTypes = IssueTypeFake;
        this.issuePriority = IssuePriorityFake;
        this.issueResolution = IssueResolutionFake;
        this.issueStatus = IssueStatusFake;
    }
}