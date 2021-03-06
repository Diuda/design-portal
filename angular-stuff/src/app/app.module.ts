import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './component/search/search.component';

import { FetchDataService } from './services/fetch-data.service';
import { DisplayDataService } from './services/display-data.service';
import { SearchdisplayComponent } from './component/searchdisplay/searchdisplay.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TabSearchComponent } from './component/tab-search/tab-search.component';
import { SearchTabSingleComponent } from './component/search-tab-single/search-tab-single.component';
import {Ng2Webstorage} from 'ngx-webstorage';
import {reducer} from './component/reducers/attributes.reducer';




const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path:'searchdisplay',component:SearchdisplayComponent },
  { path: 'searchTab', component:TabSearchComponent },
  { path: 'searchTabSingle', component:SearchTabSingleComponent}
]


@NgModule({
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: []
})
export class MaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchdisplayComponent,
    TabSearchComponent,
    SearchTabSingleComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    Ng2Webstorage,
    StoreModule.forRoot({attributes:reducer})

  ],
  providers: [ FetchDataService,DisplayDataService ],
  bootstrap: [AppComponent],
  //exports:[SearchComponent]
})
export class AppModule { }
