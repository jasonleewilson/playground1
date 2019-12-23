import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  dataMessage: string;

  constructor() { 
    setInterval(() => {
      let currentDate = new Date();
      this.dataMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000);
  }

  ngOnInit() {
  }

}
