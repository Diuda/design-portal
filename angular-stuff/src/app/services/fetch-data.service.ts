import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  UPSparams: any;

  constructor(private http: HttpClient) { }

  getUPS(UPSparams) {

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    console.log(UPSparams);


    return this.http.post("http://localhost:3000/api/search", UPSparams );

  }


}
