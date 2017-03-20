import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from '../../validators/validator.service';

enum FormType {SignUp, SignIn}
@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [ValidatorService]
}) 
export class HeaderComponent {
    private formType: FormType;

    private signInForm: any;
    private signUpForm: any;

    private user_email: FormControl;
    private password: FormControl;
    private name: FormControl;

    constructor(private vs: ValidatorService, private fb: FormBuilder)  {
        this.user_email = vs.getEmailValidator();
        this.password = vs.getPasswordValidator();
        this.name = vs.getNameValidator();

        this.signInForm = new FormGroup({
            user_email: this.user_email,
            password: this.password
        });

        this.signUpForm = new FormGroup({
            user_email: this.user_email,
            name: this.name,
            password: this.password,
            password_confirm: this.password
        })
    }
    
    public setFormType(type): FormType {
        this.formType = type;
        return this.formType;
    }

    public getFormSignUpType() {
        return FormType.SignUp;
    }

    public getFormSignInType() {
        return FormType.SignIn;
    }

    public validEmail(type): boolean {
        let result: boolean;
        switch (this.setFormType(type)) {
            case FormType.SignIn:
                result = this.signInForm.controls.user_email.errors
                    && this.signInForm.controls.user_email.dirty;
                break;
            case FormType.SignUp:
                result = this.signUpForm.controls.user_email.valid;
                break;
        }
        return result;
    }

    public validPassword(type): boolean {
        let result: boolean;
        switch (this.setFormType(type)) {
            case FormType.SignIn:
                result = this.signInForm.controls.password.errors
                    && this.signInForm.controls.password.dirty;
                break;
            case FormType.SignUp:
                result = this.signUpForm.controls.password.errors
                    && this.signUpForm.controls.password.dirty;
                break;
        }
        return result;
    }
    public validCheckPassword(): boolean {
        let result: boolean;
        if(this.signUpForm.value.password == this.signUpForm.value.password_confirm)  {
            result = false;
        } else if(this.signUpForm.value.password != this.signUpForm.value.password_confirm) {
            result = true;
        }
        return result;
    }

    public checkEmail() {
        let input_email: string;
        input_email = this.signUpForm.value.user_email;
        if(input_email == "supreme2705@gmail.com") {
            alert("Duplicate Email!");
        } else {
            alert("good");
        }
    }
}