import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
import { getHostElement } from '@angular/core/src/render3';
 import { DisplayDataService } from '../../services/display-data.service';
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
  inputPowerFactorSign:Boolean;
  temp: boolean;
  result:Object;
  message:string;
 

  constructor(
    private fetchDataService: FetchDataService,
    private displayDataService:DisplayDataService,
    private router: Router
  ) { }
  
 

  ngOnInit() {
    this.temp = false;
    this.result=null;
    this.bypass=true;
    this.inputRegion="NAM";
    this.inputPower="500";
    this.inputRunTime=30;
    this.inputCountry="US";
    this.inputPowerFactorSign=true;
    //this.displayDataService.currentMessage.subscribe(message=>this.message=message)
    
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
      PowerFactor: this.inputPowerFactor,
      inputPowerFactorSign: this.inputPowerFactorSign,
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
  newMessage() {
    //window.alert(JSON.stringify(this.result))
    this.displayDataService.changeMessage(this.result)
  }
 
}


  

