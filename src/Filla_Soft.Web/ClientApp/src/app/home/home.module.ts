import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { HomeNavComponent } from "./nav/nav.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HomeBoardsComponent } from "./boards/boards.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ]),
        MDBBootstrapModule.forRoot(),
        SharedModule
    ],
    declarations:[
        HomeComponent,
        LoginComponent,
        HomeNavComponent,
        HomeBoardsComponent
    ],
    exports: [

    ],
    providers:[]

})
export class HomeModule { }