import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApprenticesService {

  constructor(
    private http: HttpClient,
    private AuthService: AuthService
  ) { }

  path: string = "apprentices";

  getAll() {
    return this.http.get(API + "/" + this.path)
  }

  getClass(idClass: any) {
    return this.http.get(API + "/" + this.path + "/class/" + idClass)
  }

  create(data: any) {
    return this.http.post(API + "/" + this.path, { data: data })
  }

  update(data: any, id: string) {
    return this.http.put(API + "/" + this.path + "/" + id, { data: data })
  }

  updateStatus(status: boolean, id: string) {
    return this.http.put(API + "/" + this.path + "/" + id, { status: status ? false : true })
  }
}