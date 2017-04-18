import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminMainComponent } from './admin-main.component';

const AdminContent_Router: Routes = [ 
    {
        path: 'admin',
        component: AdminMainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(AdminContent_Router)],
    exports: [RouterModule]
})
export class CalendarRoutingModule { }


