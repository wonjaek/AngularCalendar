import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarMainComponent } from './calendar-main.component';
import { CalendarSideComponent } from './calendar-side/calendar-side.component';
import { CalendarTopComponent } from './calendar-top/calendar-top.component';
import { CalendarContentComponent } from './calendar-content/calendar-content.component';

@NgModule ({
    imports: [CommonModule, FormsModule],
    declarations: [CalendarMainComponent, CalendarSideComponent, CalendarTopComponent, CalendarContentComponent],
    exports: [CalendarMainComponent]
})
export class CalendarModule { }