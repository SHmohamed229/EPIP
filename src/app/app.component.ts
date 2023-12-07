import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'EPIP';
  isActive = false;

  constructor(private primengConfig: PrimeNGConfig ,
              private router : Router) {
                const pages = ['/login','/login-t' , '/register', '/vRegistration' , '/dashboard/dashHome' ]
              }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if(currentUrl == '/login-t' || currentUrl == '/vRegistration' || currentUrl == '/dashboard/dashHome' || currentUrl == '/login' || currentUrl == '/register'|| currentUrl == '/dashboard/person'){
      this.isActive = false;
    }else{
      this.isActive = true;
    }
  }
}
