import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {User} from '../../model/User';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  showTable = false;
  showError = false;
  users: User[];
  constructor(private httpService: HttpService) {
    this.users = [];
  }

  getUsers() {
    this.showTable = true;
    this.httpService.getAllUsers().subscribe((data: HttpResponse<Object>) => {
      if (data.status === 200) {
        this.showTable = true;
        this.users = <User[]>data.body;
      }
    },
      (error) => {
        this.showError = true;
        this.showTable = false;
        console.log(error);
      });
  }
  ngOnInit() {
  }

}
