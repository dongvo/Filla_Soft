import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ManageProjectService } from '../manage-project.service';

@Component({
    selector: 'admin-manage-project-new',
    templateUrl: './manage-project-new.component.html',
    styleUrls: [
        './manage-project-new.component.scss'
    ]
})

export class AdminManageProjectNewComponent implements OnInit {
    

    formAddProject: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private manageProjectService: ManageProjectService
    ){
        
    }

    ngOnInit(): void {
        this.formAddProject = this._formBuilder.group({
            name: new FormControl('', [
                Validators.required
            ]),
            description: new FormControl('')
        });
    }

    save(): void {
        if(this.formAddProject.valid) {
            let name = this.formAddProject.get('name').value;
            let description = this.formAddProject.get('description').value;
            this.manageProjectService.addNewProject(name, description).subscribe(res => {
                
            });
        }
    }
}