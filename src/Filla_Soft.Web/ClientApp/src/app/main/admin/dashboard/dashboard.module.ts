import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: AdminDashboardComponent, pathMatch: 'full' },
        ])
    ],
    declarations: [
        AdminDashboardComponent
    ],
    exports: [

    ],
    providers: [

    ]
})
export class AdminDashboardModule { }
