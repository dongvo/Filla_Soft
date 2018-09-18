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
}