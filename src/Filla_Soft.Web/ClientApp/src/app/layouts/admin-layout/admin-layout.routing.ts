import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';


export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './../../main/admin/dashboard/dashboard.module#AdminDashboardModule',
                data: {
                    state: 'app-admin-dashboard'
                },
                pathMatch: 'full'
            },
            {
                path: 'account',
                loadChildren: './../../main/admin/manage-account/manage-account.module#AdminManageAccountModule',
                data: {
                    state: 'app-admin-manage-account'
                }
            },
            {
                path: 'project',
                loadChildren: './../../main/admin/manage-project/manage-project.module#AdminManageProjectModule',
                data: {
                    state: 'app-admin-manage-project'
                }
            },
        ]
    }

]