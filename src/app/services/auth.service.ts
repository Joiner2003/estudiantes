import { Injectable } from '@angular/core';
import { API } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(
        public router: Router,
        private http: HttpClient
    ) {}

    /**
     * If the token is null, return false, else return true
     * @returns A boolean value.
    */
    public auth() {
        let token = localStorage.getItem("__room_storage__");
        return token === null ? false : true;
    }

    /**
     * If the user is authenticated, return the token from local storage. Otherwise, return null.
     * @returns The token is being returned.
    */
    public getToken() {
        if (this.auth()) {
        return localStorage.getItem("__room_storage__");
        } else {
        return null
        }
    }
}