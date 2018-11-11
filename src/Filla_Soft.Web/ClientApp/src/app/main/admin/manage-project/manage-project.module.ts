import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminManageProjectComponent } from './manage-project.component';
import { AdminManageProjectHomeComponent } from './manage-project-home/manage-project-home.component';
import { AdminManageProjectDetailComponent } from './manage-project-detail/manage-project-detail.component';
import { routes } from './manage-project.routing';
import { SharedModule } from '../../../shared/shared.module';
import { ManageProjectService } from './manage-project.service';
import { AdminManageProjectNewComponent } from './manage-project-new/manage-project-new.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes),
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        AdminManageProjectComponent,
        AdminManageProjectHomeComponent,
        AdminManageProjectDetailComponent,
        AdminManageProjectNewComponent
    ],
    exports: [

    ],
    providers: [
        ManageProjectService
    ]
})
export class AdminManageProjectModule { }
