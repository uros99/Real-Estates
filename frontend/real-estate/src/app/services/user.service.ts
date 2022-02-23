import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri = 'http://localhost:4000/';

  constructor(
    private http : HttpClient
  ) { }

  public login(username: string, password: string) : Observable<any> {
    const body = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}user/login`, body);
  }

  public deleteUser(body : any){
    return this.http.post(`${this.uri}user/delete-user`, body);
  }

  public editUser(body : any){
    return this.http.post(`${this.uri}user/edit-user`, body);
  }

  public getAllUsers(){
    return this.http.get(`${this.uri}user/users`);
  }
}
