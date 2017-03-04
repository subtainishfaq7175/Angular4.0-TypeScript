import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { CFormComponent } from './c-form/c-form.component';
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout/flexbox";
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyCjacIGgEstIWSeic53QsEfysn-Gz6ayT0",
  authDomain: "angular-368d2.firebaseapp.com",
  databaseURL: "https://angular-368d2.firebaseio.com",
  storageBucket: "angular-368d2.appspot.com",
  messagingSenderId: "116973853491"
};



const appRoutes: Routes = [
  { path: 'addform', component: CFormComponent },
  { path: 'searchresult', component: SearchResultComponent },
  { path: '',      component: SearchComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    CFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
