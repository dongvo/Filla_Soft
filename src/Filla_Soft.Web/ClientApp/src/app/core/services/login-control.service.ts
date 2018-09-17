import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoginControlService {
    private _isOpenLogin = new BehaviorSubject<boolean>(false);
    isOpenLogin = this._isOpenLogin.asObservable();

    constructor(

    ) {
        
    }

    openLogin(): void {
        this._isOpenLogin.next(true);
    }

    closeLogin(): void {
        this._isOpenLogin.next(false);
    }
}