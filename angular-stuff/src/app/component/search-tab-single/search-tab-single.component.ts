import {
  Component,
  OnInit
} from '@angular/core';


import {
  FetchDataService
} from '../../services/fetch-data.service';
import {
  Router
} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {
  DisplayDataService
} from '../../services/display-data.service';
import {
  Observable
} from 'rxjs';
import {
  startWith,
  map
} from 'rxjs/operators';
import {
  SessionStorageService
} from 'ngx-webstorage';
import {
  Store
} from '@ngrx/store';
import {
  SearchState
} from './../search.state';
import {
  Attributes
} from './../models/attributes.model';
import * as AttrActions from './../actions/attributes.action';


export interface CountryGroup {
  letter: string;
  country: string[];
}

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

  // myControl: FormControl = new FormControl();

  // options = [
  //   'Australia',
  //   'India',
  //   'New Zealand'
  // ];

  // filteredOptions: Observable < string[] > ;



  inputPower: string;
  inputRunTime: string;
  inputUPSType: string;
  inputRegion: string;
  inputCountry: string;
  result: any;
  powerFactorProperty = [{
      value: 'Lag'
    },
    {
      value: 'Lead'
    }
  ];
  bypassSlider: Boolean
  powerFactorSlider: string;
  powerFactorToggle: Boolean;
  inputRedundancyUnit: string;
  display: Observable < Attributes[] >
    text: any;
  // countryGroups: CountryGroup[] = [{
  //     letter: 'A',
  //     country: ['Australia', 'Argentina']
  //   },
  //   // {
  //   //   letter: 'N',
  //   //   country: [{name: 'New Zealand', value: 'NZ'}]
  //   // },
  //   // {
  //   //   letter: 'S',
  //   //   country: [{name: 'South Africa', value: 'SA'}]
  //   // },
  //   // {
  //   //   letter: 'U',
  //   //   country: [{name: 'USA', value: 'US'}]
  //   // }
  // ]

  // countryGroupOptions: Observable < CountryGroup[] > ;


  constructor(
    private fetchDataService: FetchDataService,
    private displayDataService: DisplayDataService,
    private router: Router,
    private _formBuilder: FormBuilder,
    //private sessionSt: SessionStorageService,
    public store: Store < SearchState >

  ) {  
    //console.log( this.result)
    this.powerFactorSlider = "0.9"
    this.bypassSlider = true;
    // this.powerFactorSlider = "0.9";
    this.powerFactorToggle = false;
  }



  ngOnInit() {


    //this.inputPower = "40";
    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(val => this.filter(val))
    //   );



    // this.countryGroupOptions = this.fourthFormGroup.get('countryGroup') !.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(val => this.filterGroup(val))
    //   );



    //this.result = null;

    this.display = this.store.select('attributes');
    this.display.subscribe((data) => {
      this.powerFactorSlider = "0.9"
    this.bypassSlider = true;
    // this.powerFactorSlider = "0.9";
    this.powerFactorToggle = false;
        if(data[1]==undefined)
        {
          //console.log(typeof(data[0].power))
          this.inputPower = data[0].power
          console.log(typeof(this.inputPower))
          this.inputRunTime =data[0].runtime
        this.inputRegion = data[0].region
        this.inputUPSType = data[0].upstype
        this.inputRedundancyUnit = data[0].runit
        // this.result=data[0].result

        }
        else{
          
      this.inputPower = data[1].power
      console.log(typeof(this.inputPower))
        this.inputRunTime = data[1].runtime
        this.inputRegion = data[1].region
        this.inputUPSType = data[1].upstype
        this.inputRedundancyUnit = data[1].runit
        this.result=data[1].result
        }
    });
  
    
    console.log(this.result)
    /*session storage
    this.inputPower = this.sessionSt.retrieve('power') == null ? undefined : this.sessionSt.retrieve('power');
    this.inputRunTime = this.sessionSt.retrieve('runtime') == null ? undefined : this.sessionSt.retrieve('runtime');
    this.inputUPSType = this.sessionSt.retrieve('upstype') == null ? undefined : this.sessionSt.retrieve('upstype');
    this.inputRegion = this.sessionSt.retrieve('region') == null ? undefined : this.sessionSt.retrieve('region');
    this.powerFactorSlider = this.sessionSt.retrieve('powerfactor') == null ? "0.9" : this.sessionSt.retrieve('powerfactor');
    this.inputRedundancyUnit = this.sessionSt.retrieve('redunit') == null ? undefined : this.sessionSt.retrieve('redunit');
    //this.inputRedundancyUnit=this.sessionSt.retrieve('redunit');
    this.result = this.sessionSt.retrieve('results') == null ? undefined : this.sessionSt.retrieve('results');
    
    this.inputRegion=this.sessionSt.retrieve('region');*/



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


  // filter(val: string): string[] {
  //   return this.options.filter(option =>
  //     option.toLowerCase().includes(val.toLowerCase()));
  // }






  // filterGroup(val: string): CountryGroup[] {
  //   if (val) {
  //     return this.countryGroups
  //       .map(group => ({
  //         letter: group.letter,
  //         country: this._filter(group.country, val)
  //       }))
  //       .filter(group => group.country.length > 0);
  //   }

  //   return this.countryGroups;
  // }

  // private _filter(cont: string[], val: string) {
  //   const filterValue = val.toLowerCase();
  //   return cont.filter(item => item.toLowerCase().startsWith(filterValue));
  // }
  /*session storage method
    setSessionStorage() {
      this.sessionSt.store('power', this.inputPower);
      this.sessionSt.store('runtime', this.inputRunTime);
      this.sessionSt.store('powerfactor', this.powerFactorSlider);
      this.sessionSt.store('redunit', this.inputRedundancyUnit);
      this.sessionSt.store('region', this.inputRegion);
      this.sessionSt.store('upstype', this.inputUPSType);

    }

  */







  searchUPS() {

    console.log(this.inputRunTime)
    console.log(this.inputPower)
    console.log(typeof(this.inputPower))
    let result;
    let powerFactor;
    let upsType;
    let power;
    let runtime;
    let region;


    if (this.powerFactorToggle == false) {
      powerFactor = "Lag " + this.powerFactorSlider;
    } else {
      powerFactor = "Lead " + this.powerFactorSlider;
    }

    if (this.inputUPSType == 'All') {
      upsType = undefined;
    } else {
      upsType = this.inputUPSType;
    }

    if (this.inputPower != undefined) {
      if (this.inputPower.toString() == 'All') {
        power = undefined;
      } else {
        power = this.inputPower;
        console.log(typeof(power))
      }
    }
    if (this.inputRunTime != undefined) {
      if (this.inputRunTime.toString() == 'All') {
        runtime = undefined;
      } else {
        runtime = this.inputRunTime;
      }
    }

    if (this.inputRegion == 'All') {
      region = undefined;
    } else {
      region = this.inputRegion;
    }



    //TODO
    //Power factor sign
    const UPSparams = {
      power: power,
      runtime: runtime,
      UPSType: upsType,
      Region: region,
      Country: this.inputCountry,
      Bypass: this.bypassSlider,
      PowerFactor: powerFactor,
      RUnit: this.inputRedundancyUnit
      // PowerFactorSign: this.inputPowerFactorSign,
    }



    console.log(UPSparams)




    this.fetchDataService.getUPS(UPSparams).subscribe((data) => {

        //TODO
        this.result = data;
        console.log(data)
        //this.sessionSt.store('results', this.result);
      },
      (error) => {
        console.log("Error: " + error);
      })


  }

  newMessage(i) {
    //window.alert(JSON.stringify(this.result))

    //console.log(i)
    this.displayDataService.changeMessage(this.result[i])
    
    console.log(typeof(this.inputPower))
   
    this.store.dispatch(new AttrActions.retain({
      power: this.inputPower,
      runtime: this.inputRunTime,
      upstype: this.inputUPSType,
      region: this.inputRegion,
      runit: this.inputRedundancyUnit,
      result:this.result

}))
     
    //console.log(this.result)
  }
  /*storeattr() {
    //console.log("i am here")
    
    console.log(this.result)
  }*/
  resetbutton() {
    this.display = this.store.select('attributes');

    this.display.subscribe((data) => {
      this.inputRegion = (data[0].region),
        this.inputUPSType = (data[0].upstype),
        this.inputRedundancyUnit = (data[0].runit)
    });
    this.inputPower = null;
    this.inputRunTime = null;
    this.result=null;
  }
}
