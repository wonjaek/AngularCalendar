import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  getDate() {
    let date : Date = new Date();
    let day : string[] = ['일', '월', '화', '수', '목', '금', '토'];
    return date.getFullYear() + '년 ' 
            + (date.getMonth() + 1) + '월 ' 
            + date.getDate() + '일 '
            + '(' + day[date.getDay()] + ')';
  }
  constructor() { }

}
