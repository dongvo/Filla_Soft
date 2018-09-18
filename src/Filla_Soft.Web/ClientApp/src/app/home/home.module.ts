import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { HomeNavComponent } from "./nav/nav.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ]),

        SharedModule
    ],
    declarations:[
        HomeComponent,
        LoginComponent,
        HomeNavComponent
    ],
    exports: [

    ],
    providers:[]

})
export class HomeModule { }