import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { getHostElement } from '@angular/core/src/render3';
 import { DisplayDataService } from '../../services/display-data.service';
=======
 
>>>>>>> 2d71e0dd4f3dfbf428354c21435d8048e2db50bd
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
<<<<<<< HEAD
  bypass: Boolean;
  inputRedundancyUnit: Number;
  inputPowerFactor: Number;
  inputPowerFactorSign:Boolean;
  temp: boolean;
  result:Object;
  message:string;
 i:number;
=======
  result: Object;
  powerFactorProperty = [
    { value: 'Lag' },
    { value: 'Lead' }
  ];
  bypassSlider: Boolean
  powerFactorSlider: String;
  powerFactorToggle: Boolean;

>>>>>>> 2d71e0dd4f3dfbf428354c21435d8048e2db50bd

  constructor(
    private fetchDataService: FetchDataService,
    private displayDataService:DisplayDataService,
    private router: Router
  ) { }
  
 

  ngOnInit() {
<<<<<<< HEAD
    this.temp = false;
    this.result=null;
    this.bypass=true;
    this.inputRegion="NAM";
    this.inputPower="500";
    this.inputRunTime=30;
    this.inputCountry="US";
    this.inputPowerFactorSign=true;
    //this.displayDataService.currentMessage.subscribe(message=>this.message=message)
    
=======
    this.result = null;
    this.bypassSlider = true;
    this.powerFactorSlider = "0.9"
    this.powerFactorToggle = false;

>>>>>>> 2d71e0dd4f3dfbf428354c21435d8048e2db50bd
  }
  

 
  searchUPS() {

    console.log(this.inputRunTime)
    console.log(this.inputPower)
    var result;
    var powerFactor;
    var RUnit;


    if(this.powerFactorToggle == false){
      powerFactor = "Lag "+this.powerFactorSlider;
    }

    else{
      powerFactor = "Lead "+this.powerFactorSlider;
    }



    //TODO
    //need to fix bypass
    const UPSparams = {
      power: this.inputPower,
      runtime: this.inputRunTime,
      UPSType: this.inputUPSType,
      Region: this.inputRegion,
      Country: this.inputCountry,
      Bypass: this.bypassSlider,
      RUnit: RUnit,
      PowerFactor: powerFactor,
      // PowerFactorSign: this.inputPowerFactorSign,
    }



    console.log(UPSparams)

  


    this.fetchDataService.getUPS(UPSparams).subscribe((data)=>{

      //TODO
     this.result=data;
<<<<<<< HEAD
      console.log(data)
=======
     console.log(data)
>>>>>>> 2d71e0dd4f3dfbf428354c21435d8048e2db50bd
     
    },   
    (error)=>{
      console.log("Error: "+error);
    })
   
    
  }
  newMessage( i) {
    //window.alert(JSON.stringify(this.result))
    
     
    this.displayDataService.changeMessage(this.result[i])
  }
 
}


  

