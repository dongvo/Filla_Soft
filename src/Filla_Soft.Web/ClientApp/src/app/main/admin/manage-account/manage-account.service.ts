import { Injectable } from '@angular/core';
import { DataService } from '../../../core/services';
import { Observable } from 'rxjs';

@Injectable()
export class ManageAccountService {


    constructor(
        private dataService: DataService
    ){

    }

    public getAllAccount(): Observable<any> {
        return this.dataService.get('/api/manage/accounts');
    }

    public addAccount(firstName: string, lastName: string, email: string, password: string): Observable<any> {
        return this.dataService.post('/api/manage/addAccount', {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Password: password
        });
    }
}