import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Issue, StatusFilter } from '../issues.models';
import { Assignee } from 'app/app.models';
import { UtilityService } from '../../../../shared/services/utility.service';

@Component({
    selector: 'app-project-issues-list',
    templateUrl: './issue-list.component.html',
    styleUrls:[
        './issue-list.component.scss'
    ]
})

export class IssueListComponent implements OnInit, AfterViewInit {
    listIssues: Array<Issue> = []

    listAssignees: Array<Assignee> = [];

    listStatusFilter: Array<StatusFilter> = [];

    statusFilters: Array<StatusFilter> = [];

    assigneeFilters: Array<Assignee> = [];

    issues: Array<Issue> = [];

    statusFiltered: StatusFilter;

    assigneeFiltered: Assignee;
    
    useListView: boolean = true;

    sortIssuesType: string='';
    
    issueSelected: Issue;

    maxHeight: number =500; 

    @ViewChild('viewContainer') viewContainer: ElementRef;

    constructor(
        private utility: UtilityService
    ){
        
    }

    ngOnInit(): void {
        this.listIssues = [
            {
                id: 1, key: 'PR-1', summary: 'test issue 1 key a key b key c key d key e key f', 
                status: 2, type: 1, createdDate: new Date(2018, 1, 1), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van A'
            },
            {
                id: 2, key: 'PR-2', summary: 'test issue 2 key a key b key c key d key e key f', 
                status: 1, type: 2, createdDate: new Date(2018, 1, 2), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {
                id: 3, key: 'PR-3', summary: 'test issue 3 key a key b key c key d key e key f', 
                status: 2, type: 3, createdDate: new Date(2018, 1, 7), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van A'
            },
            {
                id: 4, key: 'PR-4', summary: 'test issue 4 key a key b key c key d key e key f', 
                status: 3, type: 4, createdDate: new Date(2018, 1, 4), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {   
                id: 5, key: 'PR-5', summary: 'test issue 5 key a key b key c key d key e key f', 
                status: 4, type: 3, createdDate: new Date(2018, 1, 8), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {
                id: 6, key: 'PR-6', summary: 'test issue 6', status: 4, type: 1, 
                createdDate: new Date(2018, 1, 19), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {
                id: 7, key: 'PR-7', summary: 'test issue 7', status: 1, type: 2, 
                createdDate: new Date(2018, 1, 21), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {
                id: 8, key: 'PR-8', summary: 'test issue 8', status: 2, type: 3, 
                createdDate: new Date(2018, 1, 12), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {   
                id: 9, key: 'PR-9', summary: 'test issue 9', status: 3, type: 2, 
                createdDate: new Date(2018, 1, 12), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {
                id: 10, key: 'PR-10', summary: 'test issue 1', status: 2, type: 1, 
                createdDate: new Date(2018, 1, 1), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {
                id: 11, key: 'PR-11', summary: 'test issue 2', status: 1, type: 2, 
                createdDate: new Date(2018, 1, 2), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {
                id: 12, key: 'PR-12', summary: 'test issue 3', status: 2, type: 3, 
                createdDate: new Date(2018, 1, 7), updatedDate: new Date(2018, 1, 3),
                reporterID: 'asc',
                reporterName: 'nguyen van B'
            },
            {
                id: 13, key: 'PR-13', summary: 'test issue 4', status: 3, type: 4,
                 createdDate: new Date(2018, 1, 4), updatedDate: new Date(2018, 1, 3),
                 reporterID: 'asc',
                reporterName: 'nguyen van B'
            }
            // {id: 14, key: 'PR-14', summary: 'test issue 5', status: 4, type: 3, createdDate: new Date(2018, 1, 8), updatedDate: new Date(2018, 1, 3)},
            // {id: 15, key: 'PR-15', summary: 'test issue 6', status: 4, type: 1, createdDate: new Date(2018, 1, 19), updatedDate: new Date(2018, 1, 3)},
            // {id: 16, key: 'PR-16', summary: 'test issue 7', status: 1, type: 2, createdDate: new Date(2018, 1, 21), updatedDate: new Date(2018, 1, 3)},
            // {id: 17, key: 'PR-17', summary: 'test issue 8', status: 2, type: 3, createdDate: new Date(2018, 1, 12), updatedDate: new Date(2018, 1, 3)},
            // {id: 18, key: 'PR-18', summary: 'test issue 9', status: 3, type: 2, createdDate: new Date(2018, 1, 12), updatedDate: new Date(2018, 1, 3)}
        ];

        this.issues = JSON.parse(JSON.stringify(this.listIssues));

        this.listAssignees = [
            {id: 0, name: 'All'},
            {id: 1, name: 'nguyen van A'},
            {id: 2, name: 'nguyen van B nguyen van B'},
            {id: 3, name: 'nguyen van C'},
            {id: 4, name: 'nguyen van D'},
            {id: 5, name: 'nguyen van E'},
        ];
        
        // this.assigneeFilters = [
        //     {id: 0, name: 'All'},
        //     {id: 1, name: 'nguyen van A'},
        //     {id: 2, name: 'nguyen van B nguyen van B'},
        //     {id: 3, name: 'nguyen van C'},
        //     {id: 4, name: 'nguyen van D'},
        //     {id: 5, name: 'nguyen van E'},
        // ];

        this.assigneeFiltered = this.listAssignees.find(a=>a.id == 0);

        this.listStatusFilter = [
            { status: 0, name: 'All'},
            { status: 1, name: 'AAAA'},
            { status: 2, name: 'BBBB'},
            { status: 3, name: 'CCCC'},
            { status: 4, name: 'DDDD'}
        ];

        // this.statusFilters = [
        //     { status: 0, name: 'All'},
        //     { status: 1, name: 'AAAA'},
        //     { status: 2, name: 'BBBB'},
        //     { status: 3, name: 'CCCC'},
        //     { status: 4, name: 'DDDD'}
        // ];

        this.statusFiltered = this.listStatusFilter.find(status=>status.status == 0);

        this.sortIssues('key-asc');
    }

    ngAfterViewInit(): void {
        // console.log(this.viewContainer);
        // let el: HTMLElement = this.viewContainer.nativeElement;
        // let rect = el.getBoundingClientRect();
        // this.maxHeight = window.innerHeight - rect.top;
    }

    sortIssues(type): void {
        this.sortIssuesType = type;
        switch(this.sortIssuesType) {
            case 'created-asc':
                this.sortIssuesFollowCreatedDate('asc');
                break;
            case 'created-desc':
                this.sortIssuesFollowCreatedDate('desc');
                break;
            case 'updated-asc':
                this.sortIssuesFollowUpdatedDate('asc');
                break;
            case 'updated-desc':
                this.sortIssuesFollowUpdatedDate('desc');
                break;
            case 'key-asc':
                this.sortIssueFollowKey('asc');
                break;
            case 'key-desc':
                this.sortIssueFollowKey('desc');
                break;
        }
        
    }

    sortIssuesFollowCreatedDate(type: string): void {
        this.listIssues.sort((a: Issue, b:Issue)=>{
            let result = a.createdDate.getTime() - b.createdDate.getTime();
            return type =='asc' ? result: result*(-1);
        })
    }

    sortIssuesFollowUpdatedDate(type: string): void {
        this.listIssues.sort((a: Issue, b:Issue)=>{
            let result = a.updatedDate.getTime() - b.updatedDate.getTime();
            return type =='asc' ? result: result*(-1);
        })
    }

    sortIssueFollowKey(type: string ): void {
        this.listIssues.sort((a: Issue, b:Issue)=>{
            let result;
            if(a.key < b.key) result = -1;
            else if(a.key > b.key) result = 1;
            else result = 0;
            return type =='asc' ? result: result*(-1);
        });
    }


    showIssueDetails(issue: Issue): void {
        this.issueSelected = issue;
    }

    changeView(useListView: boolean): void {
        this.useListView = useListView;

        if(this.listIssues && this.listIssues.length > 0 && !this.useListView) {
            this.issueSelected = this.listIssues[0];
        }
    }


    showDropdown(ev: MouseEvent): void {
        let target = ev.target;
        let dropdownContour: HTMLElement = this.utility.getParentByClassName(target, 'filter-group-item');
        if(dropdownContour){
            if(dropdownContour.classList.contains('open') && dropdownContour.classList.contains('show')){
                dropdownContour.classList.remove(...['open', 'show']);
            }
            else {
                dropdownContour.classList.add(...['open', 'show']);
            }
        }
    }

    onClickedOutsideDropdown($event: HTMLElement): void {
        if($event.classList.contains('open') && $event.classList.contains('show')){
            $event.classList.remove(...['open', 'show']);
        }
    }

    selectStatus(ev: any, status: StatusFilter): void {
        let target = ev.target;
        if(target) {
            if(target.checked) {
                this.statusFilters.push(status);
            }
            else {
                let index = this.statusFilters.findIndex(s => s.status == status.status);
                if(index > -1) {
                    this.statusFilters.splice(index, 1);
                }
                
            }
            this.filterSimple();
        }
    }

    selectAssigee(ev: any, assignee: Assignee): void {
        let target = ev.target;
        if(target) {
            if(target.checked) {
                this.assigneeFilters.push(assignee);
            }
            else {
                let index = this.assigneeFilters.findIndex(a => a.id== assignee.id);
                if(index > -1) {
                    this.assigneeFilters.splice(index, 1);
                }
            }
            this.filterSimple();
        }
    }


    filterSimple(): void {
        this.listIssues = JSON.parse(JSON.stringify(this.issues));
        if(this.statusFilters.length != 0) {
            this.listIssues = this.listIssues.filter(issue => this.statusFilters.findIndex(s =>s.status == issue.status) > -1);
        }
        
        // if(this.assigneeFilters.length != 0) {
        //     this.listIssues = this.listIssues.filter(issue => this.assigneeFilters.findIndex(a => a.id == issue.assigneeId) > -1);
        // }
        this.sortIssues(this.sortIssuesType);
    }


    getMaxHeight(ev: any): number {

        return 300;
    }
}