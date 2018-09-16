import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { BehaviorSubject, Observable } from "rxjs";
import { RoleService } from "./role.service";


@Injectable()
export class AccountService {

    private _userProfileData = new BehaviorSubject<any>(null);
    onLoginSuccess = this._userProfileData.asObservable();

    constructor(
        private dataService: DataService,
        private roleService: RoleService
    ){

    }

    public checkLoggedIn(): Observable<any> {
        return this.dataService.get('/api/account/checkloggedin');
    }

    public logout(): void {
        this.dataService.post('/api/account/logout').subscribe((res) => {
            this.clearUserData();
            window.location.reload(true);
        });
    }


    clearUserData() {
        this._userProfileData.next(null);
        this.roleService.setRole(new Array<string>());
    }

}