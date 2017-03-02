import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  getDate(year, month, date) {
    let d : Date = new Date();
    let dayArr : string[] = ['일', '월', '화', '수', '목', '금', '토'];
    return (d.getFullYear() + year) + '년 ' 
            + (d.getMonth() + 1 + month) + '월 ' 
            + (d.getDate() + date) + '일 '
            + '(' + dayArr[d.getDay() + date] + ')';
  }
  constructor() { }

}
