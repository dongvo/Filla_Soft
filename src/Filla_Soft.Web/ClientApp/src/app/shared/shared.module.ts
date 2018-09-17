import { NgModule } from "@angular/core";
import { DisableDropdownDirective } from "./directives/disable-dropdown.directive";
import { DisableDropdownToggleDirective } from "./directives/disable-dropdown-toggle.directive";
import { UtilityService } from "./services/utility.service";
import { ClickOutsideDirective } from "./directives/click-outside.directive";

//mdbootstrap
import { 
    InputsModule, 
    WavesModule, 
    ButtonsModule, 
    ModalModule, 
    TooltipModule, 
    PopoverModule 
} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports:[
        InputsModule,
        WavesModule,
        ButtonsModule,
        ModalModule, 
        TooltipModule, 
        PopoverModule,


        FormsModule, 
        ReactiveFormsModule
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
        ModalModule, 
        TooltipModule, 
        PopoverModule,

        FormsModule, 
        ReactiveFormsModule,

        DisableDropdownToggleDirective,
        DisableDropdownDirective,
        ClickOutsideDirective
    ],
    providers: [
        UtilityService
    ]
})
export class SharedModule { }