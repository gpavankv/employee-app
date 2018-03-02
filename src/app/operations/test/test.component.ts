import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ApiMessage } from '../../model/ApiMessage';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  testMessage = '';

  constructor(private httpSerivce: HttpService) { }

  ngOnInit() {}

  testApi() {
    this.httpSerivce.testApi().subscribe((data: ApiMessage) => {
      this.testMessage = data.message;
    });
  }


  /*testApi() {
    this.httpSerivce.testApi().subscribe((data) => {
      console.log(data);
    });
  }
*/

}
