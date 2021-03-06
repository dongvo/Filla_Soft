import { NgModule } from '@angular/core';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { FormsModule } from '../../../../../node_modules/@angular/forms';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { IssuesRoutes } from './issues.routing';
import { IssuesComponent } from './issues.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { IssueSettingComponent } from './issue-settings/issue-setting.component';
import { IssueBoardComponent } from './issue-board/issue-board.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forChild(IssuesRoutes),
        SharedModule
    ],
    declarations:[
        IssuesComponent,
        IssueListComponent,
        IssueBoardComponent,
        IssueCreateComponent,
        IssueDetailsComponent,
        IssueSettingComponent
    ],
    exports: [

    ],
    providers:[]

})
export class ProjectIssuesModule { }