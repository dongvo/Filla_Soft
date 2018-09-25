import { Routes } from '@angular/router';
import { AdminManageAccountComponent } from './manage-account.component';
import { AdminManageAccountListComponent } from './manage-account-list/manage-account-list.component';
import { AdminManageAccountDetailComponent } from './manage-account-detail/manage-account-detail.component';
import { AdminManageAccountNewComponent } from './manage-account-new/manage-account-new.component';


export const AccountRoutes: Routes = [
    {
        path: '',
        component: AdminManageAccountComponent,
        children: [
            {
                path: '',
                pathMatch: 'full', 
                component: AdminManageAccountListComponent,
                data: { state: 'account-list' }
            },
            {
                path: 'new',
                pathMatch: 'full', 
                component: AdminManageAccountNewComponent,
                data: { state: 'account-new' }
            },
            {
                path: ':id',
                pathMatch: 'full', 
                component: AdminManageAccountDetailComponent,
                data: { state: 'account-detail' }
            }
        ]
    }
]