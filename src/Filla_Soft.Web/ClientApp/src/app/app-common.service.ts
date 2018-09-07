import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';




@Injectable()
export class AppCommonService {

    private _toggleSidebarMini = new BehaviorSubject<boolean>(false);
    useSidebarMini = this._toggleSidebarMini.asObservable();

    toggleSidebarMini(value: boolean): void {
        this._toggleSidebarMini.next(value);
    }

}