import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class HttpService {

  token: string;
  logged = false;
  authorized = new EventEmitter<boolean>();
  userName = new EventEmitter<string>();

  constructor(private http: HttpClient, private router: Router) {}
  testApi() {
    return this.http.get('http://localhost:3050/api/test');
  }

  deleteUser(payload: User) {
    return this.http.post('http://localhost:3050/api/deleteuser', payload);
  }

  verifyUser(payload: User) {
    return this.http.post('http://localhost:3050/api/verifyuser', payload);
  }

  findUser(payload: User) {
    return this.http.post('http://localhost:3050/api/finduserbyemail', payload);
  }

  updateUser(payload: User) {
    return this.http.put('http://localhost:3050/api/updateuser', payload);
  }

  getAllUsers() {
    return this.http.get('http://localhost:3050/api/getallusers', {observe: 'response'});
  }

  createNewUser(payload: User) {
    return this.http.post('http://localhost:3050/api/createuser', payload);
  }

  logout() {
    this.token = '';
    this.logged = false;
    this.userName.emit('');
    this.authorized.emit(false);
    this.router.navigate(['']);
  }
}

