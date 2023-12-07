import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup
  value11!:any;
  userData! : any
  constructor(private fb : FormBuilder,
              private service : AuthService,
              private router : Router) {
                // localStorage.clear()
              }

  ngOnInit(): void {
    this.myForm();
  }

//   loginForm = new FormGroup({
//     username: new FormControl(),
//     password:new FormControl()
// });
 myForm(){
  this.loginForm = this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]]
  });
 }

  login(){
    debugger
    if(this.loginForm.valid){
      this.service.getById(this.loginForm.value.username).subscribe(res => {
        this.userData = res;
        console.log(this.userData);
        if(this.userData.password === this.loginForm.value.password){
            if(this.userData.isActive){
              localStorage.setItem('username',this.userData.id)
              localStorage.setItem('role',this.userData.role)
              alert("Login Successfully!!")
              this.router.navigate(['/dashboard/dashHome']);
            }else{
              alert("Please Content To Admin")
            }
        }else{
          alert("Invalid Credentials")
        }
      })
    }else{
      window.alert("Please Enter Valid Data")
    }
  }
}
