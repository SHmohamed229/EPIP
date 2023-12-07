import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountrystatecityService {

  constructor(  private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json',
      'X-CSCAPI-KEY' : 'ZzRBSFQ5RXFsMElycmhUZ0FUU2J2U3lnb25qd3Q2MkNYbzZnZURudg=='
    })
  }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>('https://api.countrystatecity.in/v1/countries' ,
            {headers: this.httpOptions.headers})
  }

  getStateOfSelectedCountry(countryIso:string) : Observable<any> {
    return this.http.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states` ,
            {headers: this.httpOptions.headers})
  }

  getCitiesOfSelectedState(countryIso:string,stateIso:string) : Observable<any> {
    return this.http.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities` ,
            {headers: this.httpOptions.headers})
  }
}
