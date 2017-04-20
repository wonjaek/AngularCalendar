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

    getMemberByEmail(email: string): Observable<Member[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `${this.membersUrl}?email=${email}`;

        return this.http.get(url, options)
            .map(this.extractData)
            .catch(handleError);
    }

    getMember(id: number): Observable<Member> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let email = "supreme2705@gmail.com";
        let url = `${this.membersUrl}?email=${email}`;
        console.log(url);

        // console.log(this.http.get(url,options).map(this.extractData)
        // .subscribe(member => console.log(member),
        // error => console.log(error)));
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(handleError);
    }

    addMember(id: number, name: string, email: string, password: string): Observable<Member> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var body = { id, name, email, password };

        return this.http.post(this.membersUrl, body, options)
            .map(this.extractData)
            .catch(handleError);
    }
    
    putMember(m: Member) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let url = `${this.membersUrl}/${m.id}`;
        return this.http
            .put(url, JSON.stringify(m), { headers: headers })
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    delMember(m: Member) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `${this.membersUrl}/${m.id}`;
        return this.http.delete(url, options)
            .map((res: Response) => res.json())
            .catch(handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}