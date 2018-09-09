import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectLayoutRoutes } from './project-layout.routing';
import { ComponentsModule } from '../../components/components.module';
import { ProjectLayoutComponent } from './project-layout.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        RouterModule.forChild(ProjectLayoutRoutes)
    ],
    declarations:[
        ProjectLayoutComponent
    ],
    exports: [

    ],
    providers:[]

})
export class ProjectLayoutModule { }