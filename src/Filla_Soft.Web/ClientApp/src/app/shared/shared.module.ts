import { NgModule } from "@angular/core";
import { DisableDropdownDirective } from "./directives/disable-dropdown.directive";
import { DisableDropdownToggleDirective } from "./directives/disable-dropdown-toggle.directive";
import { UtilityService } from "./services/utility.service";
import { ClickOutsideDirective } from "./directives/click-outside.directive";

//mdbootstrap
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
    imports:[
        InputsModule,
        WavesModule,
        ButtonsModule
    ],
    declarations: [
        DisableDropdownToggleDirective,
        DisableDropdownDirective,
        ClickOutsideDirective
    ],
    exports: [
        //mdbootstrap
        InputsModule,
        WavesModule,
        ButtonsModule,

        DisableDropdownToggleDirective,
        DisableDropdownDirective,
        ClickOutsideDirective
    ],
    providers: [
        UtilityService
    ]
})
export class SharedModule { }