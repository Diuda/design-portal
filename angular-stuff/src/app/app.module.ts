import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './component/search/search.component';

import { FetchDataService } from './services/fetch-data.service';
import { DisplayDataService } from './services/display-data.service';

import { NouisliderModule } from 'ng2-nouislider';
import { SearchdisplayComponent } from './component/searchdisplay/searchdisplay.component';
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path:'searchdisplay',component:SearchdisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchdisplayComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NouisliderModule
  ],
  providers: [ FetchDataService,DisplayDataService ],
  bootstrap: [AppComponent],
  //exports:[SearchComponent]
})
export class AppModule { }
