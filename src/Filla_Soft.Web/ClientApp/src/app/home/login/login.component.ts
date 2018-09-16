import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginControlService } from '../../core/services';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmailRegExp, PasswordRegExp } from '../../core/custom.validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss'
    ]
})
export class LoginComponent implements OnInit, AfterViewInit {

    @ViewChild('basicModal') loginModal: any
    
    formLogin: FormGroup;

    // loginFormModalEmail = new FormControl('', Validators.email);
    // loginFormModalPassword = new FormControl('', Validators.required);

    constructor(
        private _formBuilder: FormBuilder,
        private loginControl: LoginControlService
    ){

    }

    ngOnInit(): void {
        this.formLogin = this._formBuilder.group({
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

    ngAfterViewInit(): void {
        this.loginControl.isOpenLogin.subscribe(res => {
            if(res) {
                //this.openDialogLogin(this.templateLogin);
                this.loginModal.show();
            }
        })
    }


}