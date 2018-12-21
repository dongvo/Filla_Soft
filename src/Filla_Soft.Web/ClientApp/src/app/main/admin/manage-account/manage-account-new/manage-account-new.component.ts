import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailRegExp, PasswordRegExp } from 'app/core/custom.validator';
import { ManageAccountService } from '../manage-account.service';
import { SimpleNotificationsService } from 'app/core/notifications';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'admin-manage-account-new',
    templateUrl: './manage-account-new.component.html',
    styleUrls: [
        './manage-account-new.component.scss'
    ]
})

export class AdminManageAccountNewComponent {
    
    formCreateAccount: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private router: Router,
        private accountService: ManageAccountService,
        private simpleNotificationService: SimpleNotificationsService
    ){
        
    }

    ngOnInit(): void {
        this.formCreateAccount = this._formBuilder.group({
            firstName: new FormControl('', [
                Validators.required
            ]),
            lastName: new FormControl('', [
                Validators.required
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(EmailRegExp)
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.pattern(PasswordRegExp)
            ])
        });
    }

    generatePassword(): void {
        var randomstring = Math.random().toString(36).slice(-10);
        this.formCreateAccount.controls['password'].setValue(randomstring);
    }

    save(): void {
        if(this.formCreateAccount.valid) {
            let firstName = this.formCreateAccount.get('firstName').value;
            let lastName = this.formCreateAccount.get('lastName').value;
            let email = this.formCreateAccount.get('email').value;
            let password = this.formCreateAccount.get('password').value;

            this.accountService.addAccount(firstName, lastName, email, password).subscribe(res => {
                if(res.success) {
                    this.router.navigate(['/manage', 'account']);
                }
                else {
                    this.simpleNotificationService.error('Error', res.message);
                }
            }, (error: HttpErrorResponse) =>{
                // let message =  IssueState[error.error["message"]];
                // this.simpleNotificationService.error("Login fail", message)
            });
        }
        else {
            this.simpleNotificationService.error('Error', 'Please input value to form');
        }
    }
}