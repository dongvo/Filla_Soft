import { Routes } from '@angular/router';
import { ProjectLayoutComponent } from './project-layout.component';


export const ProjectLayoutRoutes: Routes = [
    {
        path: ':projectId',
        component: ProjectLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './../../main/project/dashboard/dashboard.module#ProjectDashboardModule',
                data: {
                    state: 'app-project-dashboard'
                },
                pathMatch: 'full'
            },
            {
                path: 'issues',
                loadChildren: './../../main/project/issues/issues.module#ProjectIssuesModule',
                data: {
                    state: 'app-project-issues'
                }
            },
        ]
    }

]