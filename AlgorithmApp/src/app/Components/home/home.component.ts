import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  option = [];
  //intList:number[] = [22, 15, 26, 44, 10, 3, 9, 13, 29, 25];
  intList:number[] = [22, 15, 26, 44, 10];
  filterOptions = [
    {value : 'selection', label : "Selection Sort"},
    {value : 'insertion', label : "Insertion Sort"},
    {value : 'heap', label : "Heap Sort"}
  ];

  updateFilter(value){
    console.log(value);
    this.option = [];
    this.option.push(value);
  }

  explore(){
    this.router.navigate(['/test']);
  }

  ngOnInit() {
  }

}
