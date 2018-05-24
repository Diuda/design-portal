import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  inputPower: String;
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

    console.log(typeof(parseInt(this.inputPower.toString())))


    //TODO 
    //check if these params are searched for
    const power = parseInt(this.inputPower.toString());
    const externalBypass = parseInt(this.externalB.toString());
    const RUnit = parseInt(this.inputRedundancyUnit.toString());
    

    //TODO
    //need to fix bypass
    const UPSparams = {
      power: power,
      runtime: this.inputRunTime,
      UPSType: this.inputUPSType,
      Region: this.inputRegion,
      Country: this.inputCountry,
      externalBypass: externalBypass,
      internalB: this.internalB,
      RUnit: RUnit,
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
