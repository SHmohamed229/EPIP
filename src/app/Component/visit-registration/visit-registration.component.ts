import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { City } from 'src/app/model/city';
import { Country } from 'src/app/model/country';
import { State } from 'src/app/model/state';
import { CountrystatecityService } from 'src/app/services/countrystatecity.service';
import { VisitorsDataDTO } from './models/visitors-data-dto.model';

@Component({
  selector: 'app-visit-registration',
  templateUrl: './visit-registration.component.html',
  styleUrls: ['./visit-registration.component.css']
})
export class VisitRegistrationComponent implements OnInit {


  visitorDataDto:VisitorsDataDTO = new VisitorsDataDTO();


  myForm : FormGroup;

  visitorName! :string;
  vFatherName! :string;
  address! : string;
  genderV!  : string
  age!  : number;
  relation!  : string;
  identityProof!  : string;
  idNumber!  : number;
  email!   : string;
  mobile!   : string;
  country!   : string;
  state!   : string;
  city!    : string;
  visitDate!   : string;
  addVisitors!   : string;
  addVisitorsName!: string;
  prisonerFName! : string;
  prisonerLName! : string;
  prisonerAge! : number;
  genderP! : string;






  constructor(
    private fb : FormBuilder,
    private CounterStateCityService : CountrystatecityService,
    private route : Router,
  ) {

    this.myForm = this.fb.group({
      id : ['' , []],
      visitorName : ['Mohamed' , [Validators.required]],
      vFatherName : ['' , [Validators.required]],
      address : ['Maghagha' , [Validators.required]],
      genderV  : ['' , [Validators.required]],
      age  : ['' , [Validators.required]],
      relation  : ['' , [Validators.required]],
      identityProof  : ['' , []],
      idNumber  : ['' , [Validators.required]],
      email   : ['' , [Validators.required,Validators.email]],
      mobile   : ['' , [Validators.required]],
      country   : ['' , [Validators.required]],
      state   : ['' , [Validators.required]],
      city    : ['' , [Validators.required]],
      visitDate   : ['' , [Validators.required]],
      addVisitors   : ['' , [Validators.required]],
      addVisitorsName: ['' , [Validators.required]],
      prisonerFName : ['' , [Validators.required]],
      prisonerLName: ['' , [Validators.required]],
      prisonerAge: ['' , [Validators.required]],
      genderP: ['' , [Validators.required]],
    })

  }
  //=== for select Area
  listCountry! : Country[]
  countrySelected! : string
  listState! : State[]
  selectedState! : string
  listCity! : City[]




  ngOnInit(): void {



    this.fetchCountry();
  }

  fetchCountry(){
    this.CounterStateCityService.getCountry().subscribe(data => {
      this.listCountry = data
      console.log('Countries fetched' , this.listCountry);
    })
  }

  onCountrySelected(countryIso: any){
    this.CounterStateCityService.getStateOfSelectedCountry(countryIso).subscribe(data => {
      this.listState = data
      console.log('States Reserved' , this.listState);
    })
  }

  onStateSelected(countryParam = this.countrySelected , stateParam = this.selectedState){
    this.CounterStateCityService.getCitiesOfSelectedState(countryParam , stateParam).subscribe(data => {
      this.listCity = data
      console.log('City Reserved' , this.listCity);
    })
  }
  RegisterVisit(){
    console.log(this.myForm.value);
    console.log("data",this.visitorDataDto);
    this.route.navigate(['/']);
    window.alert("Registration Successfully")
  }



}
