import { Component, OnInit } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data.service';
import { DisplayDataService } from '../../services/display-data.service';
import { Router } from '@angular/router';
import { getHostElement } from '@angular/core/src/render3';
import {MatCardModule} from '@angular/material/card';
//import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-searchdisplay',
  templateUrl: './searchdisplay.component.html',
  styleUrls: ['./searchdisplay.component.scss']
})
export class SearchdisplayComponent implements OnInit {
  message:object;
  result:string;
  constructor(private displayDataService:DisplayDataService) { }
  

  ngOnInit() {
    
    this.displayDataService.currentMessage.subscribe(message => this.message = message)
    //window.alert(this.message)
    //console.log("result is "+this.message)
    this.result=JSON.stringify(this.message)
    console.log("result is "+this.result)
  }
  


}
