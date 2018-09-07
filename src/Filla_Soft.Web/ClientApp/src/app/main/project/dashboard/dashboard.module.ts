import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectDashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ProjectDashboardComponent, pathMatch: 'full' },
        ])
    ],
    declarations:[
        ProjectDashboardComponent
    ],
    exports: [

    ],
    providers:[]

})
export class ProjectDashboardModule { }