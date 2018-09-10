import { Routes } from '@angular/router';
import { AdminManageProjectComponent } from './manage-project.component';
import { AdminManageProjectHomeComponent } from './manage-project-home/manage-project-home.component';
import { AdminManageProjectDetailComponent } from './manage-project-detail/manage-project-detail.component';


export const routes: Routes =[
    {
        path: '',
        component: AdminManageProjectComponent,
        children: [
            {
                path: '',
                component: AdminManageProjectHomeComponent
            },
            {
                path: ':projectId',
                component: AdminManageProjectDetailComponent,
                data: {
                    state: 'app-admin-manage-project-detail'
                }
            }
        ]
    }
];