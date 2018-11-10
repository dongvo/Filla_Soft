import { Routes } from '@angular/router';
import { IssuesComponent } from './issues.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueSettingComponent } from './issue-settings/issue-setting.component';
import { IssueBoardComponent } from './issue-board/issue-board.component';


export const IssuesRoutes: Routes = [
    {
        path: '',
        component: IssuesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full', 
                redirectTo: 'list'
            },
            {
                path: 'list',
                //pathMatch: 'full', 
                component: IssueListComponent,
                data: { state: 'issue-list' }
            },
            {
                path: 'board',
                //pathMatch: 'full', 
                component: IssueBoardComponent,
                data: { state: 'issue-list' }
            },
            {
                path: 'setting',
                component: IssueSettingComponent,
                data: { state: 'issue-setting' }
            }
        ]
    }
]