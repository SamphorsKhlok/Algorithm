import { Injectable } from '@angular/core';

@Injectable()
export class InsertionService {
  data : number[];

  constructor(data: number[]) {
    this.data = data;
  }

  sort() : number[]{
    let start = performance.now();
    console.info("insertion sort applied");
    for(let i = 0 ; i < this.data.length ; i++){
      for(let j = i + 1 ; j < this.data.length ; j++){
        if(this.data[j] < this.data[i]){
          //swaping the smaller element if found
          this.swap(j,i);
        }
      }
    }

    console.info("insertion sort time taken " + (performance.now() - start) + " milliseconds.");
    return this.data;
  }

  swap (from: number, to : number){
    let temp = this.data[from];
    this.data[from] = this.data[to];
    this.data[to] = temp;
  }

}
