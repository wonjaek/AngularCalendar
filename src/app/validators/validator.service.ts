import { FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Validator } from './validator';

@Injectable()
export class ValidatorService {
    private email: FormControl;
    private password: FormControl;
    private password_confirm: FormControl;
    private name: FormControl;

    constructor() {
        this.email = new FormControl('',
            Validators.compose([ Validators.required, Validator.emailValidator])
        );
        this.password = new FormControl('',
            Validators.compose([ Validators.required, Validators.minLength(8)])
        );
        this.name = new FormControl('',
            Validators.compose([ Validators.required ])
        );
    }

    public getEmailValidator() {
        return this.email;
    }

    public getPasswordValidator() {
        return this.password;
    }

    public getNameValidator() {
        return this.name;
    }
}