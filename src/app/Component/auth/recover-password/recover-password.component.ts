import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./../auth.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hello(){
    return 'Hello World!'
  }

  recoverPass(pass:any){
    debugger
    console.log(pass.target.value);
  }
}
