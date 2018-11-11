import { Injectable } from '@angular/core';
import { DataService } from 'app/core/services';
import { NewProjectViewModel } from './manage-project.models';
import { Observable } from 'rxjs';

@Injectable()
export class ManageProjectService {

    listProjectSortType: string;

    constructor(
        private dataService: DataService
    ){

    }

    addNewProject(name: string, description: string, member?: Array<number>): Observable<any> {
        return this.dataService.post('/api/ManageProject/AddNewProject', {
            Name: name,
            Description: description
        });
    }
}