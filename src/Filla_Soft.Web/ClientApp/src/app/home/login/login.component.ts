import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginControlService, AccountService } from '../../core/services';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmailRegExp, PasswordRegExp } from '../../core/custom.validator';
import { LoginModel } from '../../core/models';

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
        private loginControl: LoginControlService,
        private accountService: AccountService
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

    login(): void {
        if(this.formLogin.valid) {
            let loginModel: LoginModel = new LoginModel();
            loginModel.email = this.formLogin.get('email').value;
            loginModel.password = this.formLogin.get('password').value;
            this.accountService.loginRegular(loginModel).subscribe( res => {
                // console.log(res);
                let success: boolean = Boolean(res['succeed']);
                
                
            }, error =>{
                alert('co loi xay ra');
            })
        }
    }

}