import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminMainComponent } from './admin-main.component';
import { AdminMemberListComponent } from './admin-member-list/admin-member-list.component';

@NgModule ({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        AdminMainComponent,
        AdminMemberListComponent
    ]
})
export class AdminModule { }