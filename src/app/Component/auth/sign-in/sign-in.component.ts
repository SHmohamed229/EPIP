import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./../auth.component.css']

})
export class SignInComponent implements OnInit {
    signInForm! : FormGroup;
    value11!:any;
    value!:any
  constructor(  private fb : FormBuilder,
                translate: TranslateService) {
                  // this language will be used as a fallback when a translation isn't found in the current language
        // translate.setDefaultLang('ar');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
      //  translate.use('en');
                }

  ngOnInit(): void {
   this.myForm();
  }

  myForm(){

    this.signInForm = this.fb.group({
      email: ['',[Validators.required , Validators.email]],
      password: ['',[Validators.required]],
      rememberMe: ['', [Validators.required]]
    });
  }

  login(){
    debugger
    console.log(this.signInForm.value);
  }
}
