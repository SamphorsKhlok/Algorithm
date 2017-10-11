import { Component, OnInit } from '@angular/core';
import {ZipcodeService} from "../../HttpService/zipcodeservice.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  option = [];
  intList:number[] = [22, 15, 26, 44, 10, 3, 9,10,10, 13, 29, 25];
  //intList:number[] = [22, 15, 26, 44, 10];
  filterOptions = [
    {value : 'selection', label : "Selection Sort"},
    {value : 'insertion', label : "Insertion Sort"},
    {value : 'heap', label : "Heap Sort"},
    {value : 'merge', label : "Merge Sort"},
    {value : 'quick', label : "Quick Sort"}
  ];

  updateFilter(value){
    console.log(value);
    this.option = [];
    this.option.push(value);
  }

  ngOnInit() {
  }

}
