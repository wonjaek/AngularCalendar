import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing';

import { AdminMainComponent } from './admin-main.component';
import { AdminMemberListComponent } from './admin-member-list/admin-member-list.component';
import { AdminScheduleListComponent } from './admin-schedule-list/admin-schedule-list.component';
import { MemberEditComponent } from './admin-member-list/member-edit/member-edit.component';

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminMainComponent,
        AdminMemberListComponent,
        AdminScheduleListComponent,
        MemberEditComponent
    ],
    exports: [AdminMainComponent]
})
export class AdminModule { }