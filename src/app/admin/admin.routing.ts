import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminMainComponent } from './admin-main.component';
import { AdminMemberListComponent } from './admin-member-list/admin-member-list.component';

const AdminContent_Router: Routes = [ 
    {
        path: 'admin',
        component: AdminMainComponent,
        children: [
            { path: '', component: AdminMemberListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AdminContent_Router)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }


