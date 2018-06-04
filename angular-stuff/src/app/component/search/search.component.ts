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
  bypass: Boolean;
  inputRedundancyUnit: Number;
  inputPowerFactor: Number;
  temp: boolean;
  result:Object;


  constructor(
    private fetchDataService: FetchDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.temp = false;
    this.result=null;
  }


  searchUPS() {

    //console.log(this.inputPower);


    //TODO 
    //check if these params are searched for
   var result;
    var power;
    var RUnit;

    if(this.inputPower == undefined) {
      power = undefined;
    }else {
      power = parseInt(this.inputPower.toString())
    }

    if(this.inputRedundancyUnit == undefined) {
      RUnit = undefined;
    }else {
      RUnit = parseInt(this.inputRedundancyUnit.toString());
    }
    // const externalBypass = parseInt(this.externalB.toString());
    // const RUnit = parseInt(this.inputRedundancyUnit.toString());
    

    //TODO
    //need to fix bypass
    const UPSparams = {
      power: power,
      runtime: this.inputRunTime,
      UPSType: this.inputUPSType,
      Region: this.inputRegion,
      Country: this.inputCountry,
      Bypass: this.bypass,
      RUnit: RUnit,
      PowerFactor: this.inputPowerFactor
    }


    //console.log(UPSparams);


    this.fetchDataService.getUPS(UPSparams).subscribe((data)=>{

      //TODO
      this.temp=true;
     this.result=data;
      //window.alert(JSON.stringify(data))
     
    },   
    (error)=>{
      console.log("Error: "+error);
    })
   
   
  }
}
