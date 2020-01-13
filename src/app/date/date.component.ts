import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  dataMessage: string;
  initialDelay: any;

  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      const initialDelay = 2 * 1000;

      this.dataMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , this.initialDelay);
  }

  ngOnInit() {
  }

}
