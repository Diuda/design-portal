import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data.service';
import {DisplayDataService} from '../../services/display-data.service';
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
  result: Object;
  powerFactorProperty = [
    { value: 'Lag' },
    { value: 'Lead' }
  ];
  bypassSlider: Boolean
  powerFactorSlider: String;
  powerFactorToggle: Boolean;
  i:number;

  constructor(
    private fetchDataService: FetchDataService,
    private displayDataService:DisplayDataService,
    private router: Router
  ) { }
  
 

  ngOnInit() {
    this.result = null;
    this.bypassSlider = true;
    this.powerFactorSlider = "0.9"
    this.powerFactorToggle = false;

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
     console.log(data)
     
    },   
    (error)=>{
      console.log("Error: "+error);
    })
   
    
  }
  newMessage(i) {
    //window.alert(JSON.stringify(this.result))
    
     //console.log(i)
    this.displayDataService.changeMessage(this.result[i])
  }
 
}


  

