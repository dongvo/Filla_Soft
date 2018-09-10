import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        RouterModule.forChild(AdminLayoutRoutes)
    ],
    declarations:[
        AdminLayoutComponent
    ],
    exports: [

    ],
    providers:[]

})
export class AdminLayoutModule { }