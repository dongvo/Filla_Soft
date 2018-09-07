import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Issue } from '../issues.models';

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

    description: string = 'asasa';

    constructor(){
        
    }
    

    ngOnInit(): void {
        this.copyInputIssueToTempIssue();
    }

    ngOnChanges(changes: SimpleChanges):void {
        if(changes.inputIssue && !changes.inputIssue.firstChange) {
            this.changeInputIssue();        
        }
    }

    changeInputIssue(): void {
        this.copyInputIssueToTempIssue();
        this.resetData();
    }
    copyInputIssueToTempIssue(): void {
        this.issue = JSON.parse(JSON.stringify(this.inputIssue));
    }

    changeDetails(): void {
        this.isChangeDetailMode = !this.isChangeDetailMode;
    }

    resetData(): void {
        this.isChangeDescriptionMode = false;
        this.isChangeDetailMode = false;
    }
}