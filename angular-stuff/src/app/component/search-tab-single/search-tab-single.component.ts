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
  fourthFormGroup: FormGroup = this._formBuilder.group({
    countryGroup: ''
  });
  fifthFormGroup: FormGroup;

  myControl: FormControl = new FormControl();

  options = [
    'Australia',
    'India',
    'New Zealand'
  ];

  filteredOptions: Observable < string[] > ;



  inputPower: Number;
  inputRunTime: Number;
  inputUPSType: String;
  inputRegion: String;
  inputCountry: String;
  result: Object;
  powerFactorProperty = [{
      value: 'Lag'
    },
    {
      value: 'Lead'
    }
  ];
  bypassSlider: Boolean
  powerFactorSlider: String;
  powerFactorToggle: Boolean;
  inputRedundancyUnit: String;


  countryGroups: CountryGroup[] = [{
      letter: 'A',
      country: ['Australia', 'Argentina']
    },
    // {
    //   letter: 'N',
    //   country: [{name: 'New Zealand', value: 'NZ'}]
    // },
    // {
    //   letter: 'S',
    //   country: [{name: 'South Africa', value: 'SA'}]
    // },
    // {
    //   letter: 'U',
    //   country: [{name: 'USA', value: 'US'}]
    // }
  ]

  countryGroupOptions: Observable < CountryGroup[] > ;


  constructor(
    private fetchDataService: FetchDataService,
    private displayDataService: DisplayDataService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );



    this.countryGroupOptions = this.fourthFormGroup.get('countryGroup') !.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterGroup(val))
      );



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
    // this.fourthFormGroup = this._formBuilder.group({
    //   fourthCtrl: ['', Validators.required]
    // });



    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }


  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }






  filterGroup(val: string): CountryGroup[] {
    if (val) {
      return this.countryGroups
        .map(group => ({
          letter: group.letter,
          country: this._filter(group.country, val)
        }))
        .filter(group => group.country.length > 0);
    }

    return this.countryGroups;
  }

  private _filter(cont: string[], val: string) {
    const filterValue = val.toLowerCase();
    return cont.filter(item => item.toLowerCase().startsWith(filterValue));
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

    },
    (error) => {
      console.log("Error: " + error);
    })


}
newMessage(i) {
  //window.alert(JSON.stringify(this.result))

  //console.log(i)
  this.displayDataService.changeMessage(this.result[i])
}
}
