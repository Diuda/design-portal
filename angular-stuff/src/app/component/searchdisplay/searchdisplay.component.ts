import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  FetchDataService
} from '../../services/fetch-data.service';
import {
  DisplayDataService
} from '../../services/display-data.service';
import {
  Router
} from '@angular/router';
import {
  getHostElement
} from '@angular/core/src/render3';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatPaginator,
  MatTableDataSource
} from '@angular/material';

//import {Store} from '@ngrx/store';
//import {SearchState} from './../search.state';
//import {Attributes} from './../models/attributes.model';
import {
  Observable
} from 'rxjs';
//import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-searchdisplay',
  templateUrl: './searchdisplay.component.html',
  styleUrls: ['./searchdisplay.component.scss']
})
export class SearchdisplayComponent implements OnInit {
  message: object;
  result: string;
  displayedColumns = ['name', 'count'];
  compparts = [];
  dataSource: MatTableDataSource < PeriodicElement > ;
  exist = true;
  compnumber: number;
  private paginator: MatPaginator;
  //display:Observable<Attributes[]>
  text: any;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(private displayDataService: DisplayDataService) {
    /*this.display=store.select('attributes');
    //console.log("display is"this.display)
    this.display.subscribe((data)=>{this.text=(data[1].runtime)})
   */

  }
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;

  }


  ngOnInit() {


    this.displayDataService.currentMessage.subscribe(message => this.message = message)
    window.scrollTo(0, 0);
    // console.log(this.message['output'])
    this.compparts = this.message['output'].parts;
    console.log(this.compparts.length)
    this.dataSource = new MatTableDataSource < PeriodicElement > (this.compparts);
    // this.exist=true;
    this.compnumber = this.compparts.length;
    if (this.compnumber)
      this.exist = true;
    else
      this.exist = false;

  }



}

export interface PeriodicElement {
  name: string;
  count: number;

}
