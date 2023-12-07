import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sidebarOpen = true;
  // sidenav!:MatSidenav
  constructor(  private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  // ngAfterViewInit() {
  //   this.observer.observe(['(max-width : 800px)']).subscribe((res)=>{
  //     if(res.matches){
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close();
  //     }else{
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open();
  //     }
  //   });
  // }
  SideBarToggle(){
    this.sidebarOpen = !this.sidebarOpen
  }
}
