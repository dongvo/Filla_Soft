import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoginControlService {
    private _isOpenLogin = new BehaviorSubject<boolean>(false);
    isOpenLogin = this._isOpenLogin.asObservable();

    private _isOpenRegister = new BehaviorSubject<boolean>(false);
    isOpenRegister = this._isOpenRegister.asObservable();

    constructor(

    ) {
        
    }

    openLogin(): void {
        this._isOpenLogin.next(true);
    }

    openRegister(): void {
        this._isOpenLogin.next(true);
    }
}