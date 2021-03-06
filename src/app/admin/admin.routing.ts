import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminMainComponent } from './admin-main.component';
import { AdminMemberListComponent } from './admin-member-list/admin-member-list.component';
import { AdminScheduleListComponent } from './admin-schedule-list/admin-schedule-list.component';

const AdminContent_Router: Routes = [ 
    {
        path: 'admin',
        component: AdminMainComponent,
        children: [
            { path: '', component: AdminMemberListComponent },
            { path: 'member', component: AdminMemberListComponent },
            { path: 'schedule', component: AdminScheduleListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AdminContent_Router)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }


