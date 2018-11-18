import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'app/app.models';

@Component({
    selector: 'app-home-boards',
    templateUrl: './boards.component.html',
    styleUrls: [
        './boards.component.scss'
    ]
})
export class HomeBoardsComponent implements OnInit {
    
    @Input() projects: Array<Project> = [];

    @Input() canCreateProject: boolean = false;

    constructor() {

    }

    ngOnInit(): void {
        
    }

}