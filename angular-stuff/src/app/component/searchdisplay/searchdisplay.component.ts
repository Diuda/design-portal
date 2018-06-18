import { Component, OnInit,ViewChild } from '@angular/core';

import { FetchDataService } from '../../services/fetch-data.service';
import { DisplayDataService } from '../../services/display-data.service';
import { Router } from '@angular/router';
import { getHostElement } from '@angular/core/src/render3';
import {MatCardModule} from '@angular/material/card';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
//import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-searchdisplay',
  templateUrl: './searchdisplay.component.html',
  styleUrls: ['./searchdisplay.component.scss']
})
export class SearchdisplayComponent implements OnInit {
  message:object;
  result:string;
  displayedColumns = ['name', 'count'];
  compparts = [];
  dataSource: MatTableDataSource<PeriodicElement>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private displayDataService:DisplayDataService) { }
  

  ngOnInit() {
    
    
    this.displayDataService.currentMessage.subscribe(message => this.message = message)
     console.log(this.message['output'])
    this.compparts =this.message['output'].parts;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.compparts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  


}

export interface PeriodicElement {
  name: string;
  count: number;
  
}