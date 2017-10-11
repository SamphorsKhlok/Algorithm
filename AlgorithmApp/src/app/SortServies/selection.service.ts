import { Injectable } from '@angular/core';

@Injectable()
export class SelectionService {
  data : number[];

  constructor(data: number[]) {
    this.data = data;
  }

  //selection sort
  sort (): number[]{
    let start = performance.now();
    console.info("selection sort applied");
    for(let i= 0 ; i < this.data.length ; i++){
      let minIndex = i;
      for(let j = i + 1 ; j < this.data.length ; j++){
        if(this.data[j] < this.data[minIndex]){
          minIndex = j;
        }
      }

      //swapping to the smaller element if found
      if(minIndex != i){
        this.swap(i,minIndex);
      }
    }

    console.info("selection sort time taken " + (performance.now() - start) + " milliseconds.");
    return this.data;
  }

  swap (from: number, to : number){
    let temp = this.data[from];
    this.data[from] = this.data[to];
    this.data[to] = temp;
  }
}
