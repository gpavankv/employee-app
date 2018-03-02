import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {NgForm} from '@angular/forms';
import {User} from '../../model/User';
import {ApiMessage} from '../../model/ApiMessage';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @ViewChild('updateForm') form: NgForm;
  showUpdateForm = false;
  foundEmail = false;
  userMessage = '';
  userMessageClass = '';
  showInfo = false;
  user: User;
  buttonName = 'Find User';
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.user = new User();
  }

  showMessage(mesClass: string, userMessage: string, show: boolean, clear?: boolean) {
    this.userMessageClass = mesClass;
    this.userMessage = userMessage;
    this.showInfo = show;
    if (clear === true) {
      setTimeout(() => {
        this.messageClear();
      }, 5000);
    }
  }
  messageClear() {
    this.userMessageClass = '';
    this.userMessage = '';
    this.showInfo = false;
  }

  fireSetTimeOut() {
    setTimeout(() => {
      this.userMessageClass = '';
      this.userMessage = '';
      this.showInfo = false;
    }, 5000);
  }
  onFind() {
    if (this.foundEmail === false) {
      this.httpService.findUser(this.user).subscribe((data: ApiMessage) => {
        if (data !== null) {
          if (data.message === 'found') {
            this.showUpdateForm = true;
            this.buttonName = 'Update User';
            this.foundEmail = true;

            this.showMessage('alert alert-success', 'User found!', true, true);

            setTimeout(() => {
              this.showMessage('alert alert-info', 'Please enter the details to update user!', true, true);
            }, 2000);
          }
        } else  {
          this.showMessage('alert alert-danger', 'No user found with that email', true, true);
        }
      });
    } else {
      console.log(this.user);
      this.httpService.updateUser(this.user).subscribe((data: ApiMessage) => {
        if (data.updated === true) {
          this.showMessage('alert alert-success', 'User updated!', true, false);
          this.form.reset();
          this.showUpdateForm = false;
          setTimeout(() => {
            this.messageClear();
          }, 5000);
        }
      }, (error) => {
        console.log(error);
      });
    }
  }

}
