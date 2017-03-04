import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RequestOptions, RequestMethod, Headers, Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-c-form',
  templateUrl: './c-form.component.html',
  styleUrls: ['./c-form.component.css']
})
export class CFormComponent implements OnInit {
  @ViewChild('heroForm') form: NgForm;
  submitted = false;

  onSubmit() {
    debugger;
    this.form;
    this.submitted = true;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var body= JSON.stringify(this.form.value);

this._http.post('https://angular-368d2.firebaseio.com/items.json', body, {headers:headers})

      .map((data :Response) => data.json())
  .subscribe( data=>console.log(data))}




  constructor(  private _http: Http) { }

  ngOnInit() {
  }

}
