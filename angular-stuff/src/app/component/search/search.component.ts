import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  someRange= [0,10];
  inputPower: String;
  inputRunTime: Number;
  inputUPSType: String;
  inputRegion: String;
  inputCountry: String;
  bypass: Boolean;
  inputRedundancyUnit: Number;
  inputPowerFactor: Number;
  inputPowerFactorSign: String;
  temp: boolean;
  result: Object;
  powerFactorProperty = [
    { value: 'Lag' },
    { value: 'Lead' }
  ];


  constructor(
    private fetchDataService: FetchDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.temp = false;
    this.result = null;
    this.bypass = true;
    this.inputRegion = "NAM";
    this.inputPower = "500";
    this.inputRunTime = 30;
    this.inputCountry = "US";
    this.inputPowerFactorSign = this.powerFactorProperty[0].value;
    
  }


  searchUPS() {

    console.log(this.inputPowerFactorSign)

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
      PowerFactor: this.inputPowerFactor,
      PowerFactorSign: this.inputPowerFactorSign,
      someRange: this.someRange
    }

    console.log(this.someRange)

  


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


  

