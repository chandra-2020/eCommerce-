import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  // create an array of objects
 salesPersonList: SalesPerson[] = [

   new SalesPerson('Anup', 'kumar', 'anup@gmail.com', 50000),
   new SalesPerson('Ram', 'karki', 'Ram@gmail.com', 90000),
   new SalesPerson('Kanchi', 'Yadav', 'PRAKASH@gmail.com', 60000),
   new SalesPerson('kp', 'Kafle', 'Varat12@gmail.com', 40000),
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
