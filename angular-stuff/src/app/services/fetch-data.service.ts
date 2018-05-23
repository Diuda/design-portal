import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  UPSparams: any;

  constructor(private https: Http) { }

  getUPS(UPSparams) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json')
    console.log(UPSparams);

    return this.https.post('http://localhost:3000/search', UPSparams, { headers: headers }).pipe(map(res=>res.json()));

  }


}
