import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarMainComponent } from './calendar-main.component';
import { CalendarSideComponent } from './calendar-side/calendar-side.component';
import { CalendarTopComponent } from './calendar-top/calendar-top.component';
import { CalendarContentComponent } from './calendar-content/calendar-content.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { CalendarWeekComponent } from './calendar-week/calendar-week.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { CalendarRoutingModule } from './calendar.routing';

@NgModule ({
    imports: [CommonModule, 
    FormsModule,
    CalendarRoutingModule],
    
    declarations: [
        CalendarMainComponent, 
        CalendarSideComponent,
        CalendarTopComponent, 
        CalendarContentComponent, 
        CalendarDayComponent, 
        CalendarWeekComponent, 
        CalendarMonthComponent
    ],
    exports: [CalendarMainComponent]
})
export class CalendarModule { }