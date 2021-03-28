import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
public values;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getValue();
  }
getValue(){
  this.httpClient.get('http://localhost:5000/api/values').subscribe(
    data=> {
      this.values = data;
    },
    error=> {
      console.log(error);
    }
  );
}
}
