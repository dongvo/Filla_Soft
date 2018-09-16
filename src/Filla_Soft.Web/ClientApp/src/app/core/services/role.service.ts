import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RoleService {

    private _isUser = new BehaviorSubject<boolean>(false);
    isUser = this._isUser.asObservable();

    private _isAdmin = new BehaviorSubject<boolean>(false);
    isAdmin = this._isAdmin.asObservable();

    constructor() {
        
    }

    setRole(roles: Array<string>): void {
        if(roles.length > 0) {
            roles.forEach( r => {
                let role = r.toUpperCase();

                switch(role) {
                    case 'ADMIN': {
                        this._isAdmin.next(true);
                        break;
                    }
                    case 'USER': {
                        this._isUser.next(true);
                        break;
                    }
                }
            })
        }
        else {
            this._isAdmin.next(false);
            this._isUser.next(false);
        }
    }



}
