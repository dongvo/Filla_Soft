import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { BehaviorSubject, Observable } from "rxjs";
import { RoleService } from "./role.service";
import { LoginModel, User } from "../models";


@Injectable()
export class AccountService {

    private _userProfileData = new BehaviorSubject<any>(null);
    onLoginSuccess = this._userProfileData.asObservable();

    private _projectsData = new BehaviorSubject<any>(null);
    projectsData = this._projectsData.asObservable();

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

    public loginRegular(model: LoginModel): Observable<any> {
        // console.log(this.isLoggedIn);
        return this.dataService.post<any>('/api/account/login', model);
    }


    clearUserData() {
        this._userProfileData.next(null);
        this.roleService.setRole(new Array<string>());
        this.clearProjectsData();
    }

    setSession(user: User, data: any) {
        if(user) {
            this._userProfileData.next(user);
            this.roleService.setRole(user.roles);
            //this.redirectAfterLogin(user);
            this.setProjectsData(data);
        }
    }

    
    clearProjectsData(): void{
        this._projectsData.next(null);
    }

    setProjectsData(data: any): void {
        this._projectsData.next(data);
    }

}