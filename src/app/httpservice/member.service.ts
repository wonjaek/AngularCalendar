import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Member } from '../vo/member';
import { Observable } from 'rxjs/Observable';
import { handleError } from '../async-handling.observable';

@Injectable()
export class MemberService {
    private membersUrl = 'app/members';
    constructor(private http: Http) { }

    getMembers(): Observable<Member[]> {
        return this.http.get(this.membersUrl)
            .map(this.extractData)
            .catch(handleError);
    }

    addMember(name: string, id: string, password: string): Observable<Member> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var body = { name}
    }
}