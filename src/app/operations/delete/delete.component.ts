import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {User} from '../../model/User';
import {ApiMessage} from '../../model/ApiMessage';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @ViewChild('deleteForm') form: NgForm;
  user: User;

  userMessage = '';
  userMessageClass = '';
  showInfo = false;

  foundEmail = false;

  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.user = new User();
  }
  change() {
    this.foundEmail = false;
    this.userMessageClass = '';
    this.userMessage = '';
    this.showInfo = false;
  }

  showMessage(mesClass: string, userMessage: string, show: boolean, clear?: boolean) {
    this.userMessageClass = mesClass;
    this.userMessage = userMessage;
    this.showInfo = show;
    if (clear === true) {
      setTimeout(() => {
        this.clear();
      }, 5000);
    }
  }
  clear() {
    this.userMessageClass = '';
    this.userMessage = '';
    this.showInfo = false;
  }

  find() {
    this.httpService.findUser(this.user).subscribe((data: ApiMessage) => {
      if (data !== null) {
        if (data.message === 'found') {
          this.foundEmail = true;
          this.showMessage('alert alert-success', 'User found!', true, true);
        }
      } else {
        this.showMessage('alert alert-danger', 'No user found with that email', true, true);
        this.foundEmail = false;
      }
    });
  }
  delete() {
    this.httpService.deleteUser(this.user).subscribe((data: ApiMessage) => {
      if(data.deleted === true) {
        this.form.reset();
        this.showMessage('alert alert-info', 'User deleted!', true, true);
      }
    });
  }

}
