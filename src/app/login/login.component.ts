import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../services/http.service';
import {NgForm} from '@angular/forms';
import {User} from '../model/User';
import {Router} from '@angular/router';
import {ApiMessage} from '../model/ApiMessage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  user: User;
  errorDisplay = false;


  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
     this.user = new User();
  }

  onSubmit() {
    this.httpService.verifyUser(this.user).subscribe((data: ApiMessage) => {
      this.httpService.userName.emit(data.message);
      this.httpService.token = data.token;
      this.httpService.logged = true;
      this.httpService.authorized.emit(data.authorized);
      this.router.navigate(['operations/read']);
    },
      (error) => {
        console.log(error);
        this.errorDisplay = true;
        this.router.navigate(['login']);
      });
  }


}
