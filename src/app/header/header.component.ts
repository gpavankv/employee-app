import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = '';
  authorized: boolean;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.userName.subscribe((data: string) => {
      this.userName = data;
    });
    this.httpService.authorized.subscribe((data: boolean) => {
      this.authorized = data;
    });
  }

  logout() {
    this.httpService.logout();
  }



}
