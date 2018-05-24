import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  inputPower: Number;
  inputRunTime: Number;
  inputUPSType: String;
  inputRegion: String;
  inputCountry: String;
  externalB: Boolean;
  internalB: Boolean;
  inputRedundancyUnit: Number;
  inputPowerFactor: Number;


  constructor(
    private fetchDataService: FetchDataService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  searchUPS() {
    
    const UPSparams = {
      power: this.inputPower,
      runtime: this.inputRunTime,
      UPSType: this.inputUPSType,
      Region: this.inputRegion,
      Country: this.inputCountry,
      externalBypass: this.externalB,
      internalB: this.internalB,
      RUnit: this.inputRedundancyUnit,
      PowerFactor: this.inputPowerFactor
    }


    console.log(UPSparams);


    this.fetchDataService.getUPS(UPSparams).subscribe((data)=>{

      //TODO
      console.log("data send to service: "+data[0].output.nameUPS)
    },
    (error)=>{
      console.log("Error: "+error);
    })
  }
}
