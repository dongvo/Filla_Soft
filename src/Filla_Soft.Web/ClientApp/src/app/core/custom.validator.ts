import { Validators, ValidatorFn, FormControl } from "@angular/forms";


export class CustomValidators extends Validators {
    static number(prms = {}): ValidatorFn {
        return (control: FormControl): {[key: string]: any} => {
            let val: number = control.value;

            if(isNaN(val) || /\D/.test(val.toString())) {
                return {"number": true};
            }  else {
                return null;
            }
        };
    }
}

export const PasswordRegExp = RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#-?&])[A-Za-z\d$@$!%*#-?&]{8,}$/);

export const EmailRegExp = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
