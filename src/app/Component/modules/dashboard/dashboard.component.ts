import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { formatDate } from '@angular/common';
import localAr from'@angular/common/locales/ar-EG'

registerLocaleData(localAr);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentDate : Date
  constructor() {

    this.currentDate = new Date();
    formatDate(this.currentDate, 'dd/MM/yyyy hh:m a' ,'en-US');
  }

  ngOnInit(): void {
  }


}
