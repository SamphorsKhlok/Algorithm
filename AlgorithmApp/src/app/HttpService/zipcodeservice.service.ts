import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ZipcodeService {

  urlZipcode:string = 'http://gomashup.com/json.php?fds=geo/usa/zipcode/state/';

  constructor(private http: HttpClient) { }

  getZipcodeByState(state: string){
    this.urlZipcode = this.urlZipcode + state +"&jsoncallback=?";
    return this.http.get(this.urlZipcode);
  }

  getInternalZips(){
    return this.http.get("./assets/zipcode.json");
  }

}
