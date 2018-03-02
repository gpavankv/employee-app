import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  title = 'Employee App';
  isAllowed = true;
  buttonTitle = 'You can\'t click me';
  textBoxInput = '';
  toggleIsAllow() {
    this.isAllowed = !this.isAllowed;
    this.changeButtonName();
  }
  resetTitle() {
    this.title = 'Employee App';
  }
  changeButtonName() {
    if (!this.isAllowed) {
      this.buttonTitle = 'You can Click me now';
    } else {
      this.buttonTitle = 'You can\'t click me';
    }
  }

  receiveTitle(data: string) {
    this.title = data;
  }

  constructor() { }

  ngOnInit() {
  }

}
