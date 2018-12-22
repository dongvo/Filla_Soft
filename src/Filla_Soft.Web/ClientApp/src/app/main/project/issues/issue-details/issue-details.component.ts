import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Issue, IssueType, IssueStatus, IssueResolution, IssuePriority } from '../issues.models';
import { IssueTypeFake, IssuePriorityFake, IssueResolutionFake, IssueStatusFake } from '../issues.fake';

@Component({
    selector: 'app-project-issues-details',
    templateUrl: './issue-details.component.html',
    styleUrls:[
        './issue-details.component.scss'
    ]
})

export class IssueDetailsComponent implements OnInit, OnChanges {

    @Input('issue') inputIssue: Issue;

    issue: Issue;

    isChangeDetailMode: boolean = false;

    isChangeDescriptionMode: boolean = false;

    description: string = 'this is description of project.';
    tempDescription: string ='';

    issueTypes: Array<IssueType> = [];
    issueStatus: Array<IssueStatus> = [];
    issueResolution: Array<IssueResolution> = [];
    issuePriority: Array<IssuePriority> = [];

    currentType: string;
    currentStatus: string;
    currentPriority: string;
    currentResolution: string;

    constructor(){
        
    }
    

    ngOnInit(): void {
        this.copyInputIssueToTempIssue();
        this.getDefaultValue();
    }

    ngOnChanges(changes: SimpleChanges):void {
        if(changes.inputIssue && !changes.inputIssue.firstChange) {
            this.changeInputIssue();        
        }
    }

    getDefaultValue(): void {
        this.issueTypes = IssueTypeFake;
        this.issuePriority = IssuePriorityFake;
        this.issueResolution = IssueResolutionFake;
        this.issueStatus = IssueStatusFake;

        this.currentType = this.issueTypes.find(a => a.id == this.issue.type).name;
        this.currentStatus = this.issueStatus.find(a => a.id == this.issue.status).name;
        this.currentPriority = this.issuePriority.find(a => a.id == this.issue.priority).name;
        this.currentResolution = this.issueResolution.find(a => a.id == this.issue.resolution).name;
    }

    changeInputIssue(): void {
        this.copyInputIssueToTempIssue();
        this.getDefaultValue();
        this.resetData();
    }
    copyInputIssueToTempIssue(): void {
        this.issue = JSON.parse(JSON.stringify(this.inputIssue));
    }

    changeDetails(type: number): void {
        if(type == 1)
            this.isChangeDetailMode = true;
        else if(type == 2){
            this.isChangeDetailMode = false;
            this.currentType = this.issueTypes.find(a => a.id == this.issue.type).name;
            this.currentStatus = this.issueStatus.find(a => a.id == this.issue.status).name;
            this.currentPriority = this.issuePriority.find(a => a.id == this.issue.priority).name;
            this.currentResolution = this.issueResolution.find(a => a.id == this.issue.resolution).name;
        }
        else if(type == 3) {
            this.isChangeDetailMode = false;
        }
    }

    resetData(): void {
        this.isChangeDescriptionMode = false;
        this.isChangeDetailMode = false;
    }

    changeIssueType(id): void {
        this.currentType = this.issueTypes.find(a => a.id == id).name;
    }
    
    changeIssueStatus(id): void {
        this.currentStatus = this.issueStatus.find(a => a.id == id).name;
    }

    changeIssuePriority(id): void {
        this.currentPriority = this.issuePriority.find(a => a.id == id).name;
    }

    changeIssueResolution(id): void {
        this.currentResolution = this.issueResolution.find(a => a.id == id).name;
    }
}