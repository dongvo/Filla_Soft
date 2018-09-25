import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminManageAccountComponent } from './manage-account.component';
import { ManageAccountService } from './manage-account.service';
import { SharedModule } from '../../../shared/shared.module';
import { AdminManageAccountDetailComponent } from './manage-account-detail/manage-account-detail.component';
import { AdminManageAccountListComponent } from './manage-account-list/manage-account-list.component';
import { AdminManageAccountNewComponent } from './manage-account-new/manage-account-new.component';
import { AccountRoutes } from './manage-account.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AccountRoutes),
        SharedModule
    ],
    declarations: [
        AdminManageAccountComponent,
        AdminManageAccountNewComponent,
        AdminManageAccountListComponent,
        AdminManageAccountDetailComponent
    ],
    exports: [

    ],
    providers: [
        ManageAccountService
    ]
})
export class AdminManageAccountModule { }
