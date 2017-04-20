import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule } from './calendar/calendar.module';
import { AdminModule } from './admin/admin.module';

import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { CalendarMainComponent } from './calendar/calendar-main.component';
import { AdminMainComponent } from './admin/admin-main.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), CalendarModule, AdminModule ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
