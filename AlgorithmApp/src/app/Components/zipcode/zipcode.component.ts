import { Component, OnInit } from '@angular/core';
import {ZipcodeService} from "../../HttpService/zipcodeservice.service";

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  zipcodes;
  constructor(private zipcode: ZipcodeService) {
    // this.zipcode.getInternalZips().subscribe(
    //   (data)=> {
    //     this.zipcodes = data;
    //   },
    //   (error)=> console.error(error),
    //   ()=> console.info("zipcode service completed")
    // );
  }

  ngOnInit() {

  }

}
