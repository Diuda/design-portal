import { Component, OnInit } from '@angular/core';


import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DisplayDataService} from '../../services/display-data.service';

@Component({
  selector: 'app-search-tab-single',
  templateUrl: './search-tab-single.component.html',
  styleUrls: ['./search-tab-single.component.scss']
})
export class SearchTabSingleComponent implements OnInit {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;


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
  inputRedundancyUnit: String;


  constructor(
    private fetchDataService: FetchDataService,
    private displayDataService:DisplayDataService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit( ) {
    this.result = null;
    this.bypassSlider = true;
    this.powerFactorSlider = "0.9"
    this.powerFactorToggle = false;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

  searchUPS() {

    console.log(this.inputRunTime)
    console.log(this.inputPower)
    let result;
    let powerFactor;
    let upsType;
    let power;
    let runtime;
    let region;
  
  
    if(this.powerFactorToggle == false){
      powerFactor = "Lag "+this.powerFactorSlider;
    }
  
    else{
      powerFactor = "Lead "+this.powerFactorSlider;
    }

    if(this.inputUPSType=='All'){
      upsType = undefined;
    }
    else{
      upsType = this.inputUPSType;
    }

    if(this.inputPower == 0){
      power = undefined;
    }
  
  
  
    //TODO
    //removed redundancy unit
    const UPSparams = {
      power: this.inputPower,
      runtime: this.inputRunTime,
      UPSType: upsType,
      Region: this.inputRegion,
      Country: this.inputCountry,
      Bypass: this.bypassSlider,
      PowerFactor: powerFactor,
      RUnit: this.inputRedundancyUnit
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


