import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminManageProjectComponent } from './manage-project.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: AdminManageProjectComponent, pathMatch: 'full' },
        ])
    ],
    declarations: [
        AdminManageProjectComponent
    ],
    exports: [

    ],
    providers: [

    ]
})
export class AdminManageProjectModule { }
