import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule } from './calendar/calendar.module';

import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { CalendarMainComponent } from './calendar/calendar-main.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'calendar', component: CalendarMainComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), CalendarModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
