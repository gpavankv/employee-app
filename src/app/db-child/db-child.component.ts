import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-db-child',
  templateUrl: './db-child.component.html',
  styleUrls: ['./db-child.component.css']
})
export class DataBindingChildComponent implements OnInit {
  @Input() nameFromParent = '';
  @Output() sendTitle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSend() {
    this.sendTitle.emit('Data from Child Component');
  }

}
