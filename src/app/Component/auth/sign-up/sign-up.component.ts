import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./../auth.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm! : FormGroup;

  value11!:any;
  value!:any
  constructor(    private fb : FormBuilder,
                  private service : AuthService,
                  private router : Router) { }

  ngOnInit(): void {
    this.myForm();
  }
  myForm(){

    // this.signUpForm = this.fb.group({
    //   fName: ['',],
    //   lName: [''],
    //   email: [''],
    //   password: [''],
    //   rememberMe: ['', ],
    //   role: [''],
    //   isActive: [false]
    // });


    this.signUpForm  = new FormGroup({
      fName: new FormControl(),
      lName: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password:new FormControl(),
      rememberMe: new FormControl(),
      role: new FormControl(),
      isActive: new FormControl(),
  });
  }

  signUp(){
    console.log(this.signUpForm.value);
    if(this.signUpForm.valid){
      this.service.registerData(this.signUpForm.value).subscribe(res => {
        alert("Registration Successfully!!"),
        this.router.navigate(['login']);
      } )
    }else{
      window.alert("Please Enter Valid Data")
    }
  }
}
