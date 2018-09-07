import { Routes } from '@angular/router';
import { IssuesComponent } from './issues.component';
import { IssueListComponent } from './issue-list/issue-list.component';


export const IssuesRoutes: Routes = [
    {
        path: '',
        component: IssuesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full', 
                component: IssueListComponent,
                data: { state: 'issue-list' }
            }
        ]
    }
]