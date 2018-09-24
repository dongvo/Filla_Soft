import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminManageAccountComponent } from './manage-account.component';
import { ManageAccountService } from './manage-account.service';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: AdminManageAccountComponent, pathMatch: 'full' },
        ]),
        SharedModule
    ],
    declarations: [
        AdminManageAccountComponent
    ],
    exports: [

    ],
    providers: [
        ManageAccountService
    ]
})
export class AdminManageAccountModule { }
