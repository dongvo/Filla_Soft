import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[disableDropdownToggle]',
    exportAs: 'disableDropdownToggle'
})
export class DisableDropdownToggleDirective {
    
    @Output() click: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        
    ) {
    }

    @HostListener('click', ['$event'])
    onCLick() {
        this.click.emit(true);
    }

}