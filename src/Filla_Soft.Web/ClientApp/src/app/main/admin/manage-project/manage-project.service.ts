import { Injectable } from '@angular/core';
import { DataService } from 'app/core/services';
import { NewProjectViewModel } from './manage-project.models';

@Injectable()
export class ManageProjectService {

    listProjectSortType: string;

    constructor(
        private dataService: DataService
    ){

    }

    addNewProject(name: string, member: Array<number>): void {
        //this.dataService.post()
    }
}