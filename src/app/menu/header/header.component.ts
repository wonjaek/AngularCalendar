import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ValidatorService } from '../../validators/validator.service';
import { MemberService } from '../../httpservice/member.service';

import { Member } from '../../vo/member';

enum FormType {SignUp, SignIn}
@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [ValidatorService, MemberService]
}) 
export class HeaderComponent {
    private formType: FormType;

    private signInForm: any;
    private signUpForm: any;

    itemsOperator: Observable<Member[]>;
    inputValue: string;
    members: Member[] = null;
    isEmail: boolean = false;
    private searchKeyStream = new Subject<string>();
    private errMessage: string;
    private infoMessage: string;
    private user_email: FormControl;
    private password: FormControl;
    private name: FormControl;

    constructor(private memberService: MemberService, private vs: ValidatorService, private fb: FormBuilder)  {
        //rxjs KeyStream
        this.searchKeyStream
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap((keyword: string) => this.memberService.getMemberByEmail(keyword))
            .subscribe(members => this.checkEmail(this.inputValue, members)); 
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

    ngOnInit() {
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

    public searchEmail(email: string) {
        console.log(email);
        console.log("1");
        this.inputValue = email;
        this.searchKeyStream.next(email);
    }

    public checkEmail(email:string, members: Member[]) {
        if (members.length == 0) {
            this.infoMessage = "ok";
        } else {
            for (let member of members) {
                if (this.inputValue == member.email) {
                    this.infoMessage = "duplicate";
                }
            }
        }
    }
}