import { Routes } from '@angular/router';
import { AdminManageProjectComponent } from './manage-project.component';
import { AdminManageProjectHomeComponent } from './manage-project-home/manage-project-home.component';
import { AdminManageProjectDetailComponent } from './manage-project-detail/manage-project-detail.component';
import { AdminManageProjectNewComponent } from './manage-project-new/manage-project-new.component';


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
                path: 'new',
                component: AdminManageProjectNewComponent,
                data: {
                    state: 'app-admin-manage-project-new'
                }
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