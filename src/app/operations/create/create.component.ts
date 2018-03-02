import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {NgForm} from '@angular/forms';
import {User} from '../../model/User';
import {ApiMessage} from '../../model/ApiMessage';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('createUserForm') form: NgForm;
  constructor(private httpService: HttpService) { }
  user: User;
  created: boolean;
  someError: boolean;
  ngOnInit() {
    this.user = new User();
  }

  createUser() {
    this.httpService.createNewUser(this.user).subscribe((data: ApiMessage) => {
     if (data.created === true) {
       this.created = true;
     }
     this.form.reset();
    },
      (error) => {
        console.log(error);
        this.someError = true;
      });
  }
}




