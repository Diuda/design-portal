import { Component, OnInit } from '@angular/core';


import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


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


  constructor(
    private fetchDataService: FetchDataService,
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
  }

  searchUPS() {

    console.log(this.inputRunTime)
    console.log(this.inputPower)
    var result;
    var powerFactor;
    var upsType;
  
  
    if(this.powerFactorToggle == false){
      powerFactor = "Lag "+this.powerFactorSlider;
    }
  
    else{
      powerFactor = "Lead "+this.powerFactorSlider;
    }

    if(this.inputUPSType=='All'){
      upsType = undefined;
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
  }


