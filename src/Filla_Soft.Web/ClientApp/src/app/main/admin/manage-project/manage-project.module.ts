import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminManageProjectComponent } from './manage-project.component';
import { AdminManageProjectHomeComponent } from './manage-project-home/manage-project-home.component';
import { AdminManageProjectDetailComponent } from './manage-project-detail/manage-project-detail.component';
import { routes } from './manage-project.routing';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AdminManageProjectComponent,
        AdminManageProjectHomeComponent,
        AdminManageProjectDetailComponent
    ],
    exports: [

    ],
    providers: [

    ]
})
export class AdminManageProjectModule { }
