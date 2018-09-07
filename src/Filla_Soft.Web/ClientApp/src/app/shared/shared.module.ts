import { NgModule } from "@angular/core";
import { DisableDropdownDirective } from "./directives/disable-dropdown.directive";
import { DisableDropdownToggleDirective } from "./directives/disable-dropdown-toggle.directive";
import { UtilityService } from "./services/utility.service";
import { ClickOutsideDirective } from "./directives/click-outside.directive";


@NgModule({
    imports:[],
    declarations: [
        DisableDropdownToggleDirective,
        DisableDropdownDirective,
        ClickOutsideDirective
    ],
    exports: [
        DisableDropdownToggleDirective,
        DisableDropdownDirective,
        ClickOutsideDirective
    ],
    providers: [
        UtilityService
    ]
})
export class SharedModule { }