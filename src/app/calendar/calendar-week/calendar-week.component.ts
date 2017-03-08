import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.css']
})
export class CalendarWeekComponent implements OnInit {
  date;
  dayToMs = 86400000;
  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
    console.log(this.date);
    console.log(new Date(this.date-this.dayToMs));
  }

}
