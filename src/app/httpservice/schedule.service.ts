import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Schedule } from '../vo/schedule';
import { Observable } from 'rxjs/Observable';
import { handleError } from '../async-handling.observable';

@Injectable()
export class ScheduleService {
    private schedulesUrl = 'app/schedules';
    constructor(private http: Http) { }

    getSchedules(): Observable<Schedule[]> {
        return this.http.get(this.schedulesUrl)
            .map(this.extractData)
            .catch(handleError);
    }

    addSchedule(id: number, title: string, start_date: Date, end_date: Date, member_no: number): Observable<Schedule> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var body = { id, title, start_date, end_date, member_no };

        return this.http.post(this.schedulesUrl, body, options)
            .map(this.extractData)
            .catch(handleError);
    }

    putSchedule(s: Schedule) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let url = `${this.schedulesUrl}/${s.id}`;
        return this.http   
            .put(url, JSON.stringify(s), { headers: headers })
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    delSchedule(s: Schedule) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `${this.schedulesUrl}/${s.id}`;
        return this.http.delete(url, options)
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {} ;
    }
}
