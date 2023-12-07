import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(  private http : HttpClient) { }

  getChartInfo(){
    return this.http.get("http://localhost:3000/posts");
  }
}
