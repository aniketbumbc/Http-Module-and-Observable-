import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../module/user';
@Injectable()

export class UserService {
    private userUrl: string = 'https://reqres.in/api/users';
    constructor(private http: Http) { }
    // grab all user
    getUsers(): Observable<User[]> {
        return this.http.get(this.userUrl)
            .map(res => res.json().data)
            .catch(this.handleErr);
    }

    // get a single user
getUser() {
    return this.http.get('http://Google.com')
    .map(res => res.json())
    .catch(this.handleErr);
}


    getSingleUser() {

    }







    // create a user

    // update a user

    // delete a user





    // Handle Error Api

    private handleErr(err) {
        let errormsg: string;
        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errormsg = `${err.status} - ${err.statusText}-${''}-${error}`;

        } else {
            errormsg = err.message ? err.message : err.toString();
        }
        return Observable.throw(errormsg);

    }
}
