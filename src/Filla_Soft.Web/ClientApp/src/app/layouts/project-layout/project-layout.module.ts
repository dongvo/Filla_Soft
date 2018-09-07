import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectLayoutRoutes } from './project-layout.routing';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { FormsModule } from '../../../../node_modules/@angular/forms';
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