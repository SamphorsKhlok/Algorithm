import { Injectable } from '@angular/core';

@Injectable()
export class QuickService {

  constructor() { }

  sort(data: number[]){
    console.info("quick sort applied");
    let start = performance.now();
    //console.info("start at "+ start);
    //base case
    if(data.length < 2){
      return data;
    }

    //random selection one pivot out of data
    let index = Math.floor(Math.random() * data.length);
    let pivot = data[index];

    let [lesser, equal, greater] = this.partition(data, pivot);

    //merge them together in order lesser, pivot , and greater
    data = this.sort(lesser).concat(equal, this.sort(greater));

    let end = performance.now();
    //console.info("end at "+ end);
    console.info("quick sort time taken " + (end - start) + " milliseconds.");
    return data;
  }

  partition(list: number[], pivot : number ) : [number[], number[], number[]]{

    let lesser : number[] = [];
    let equal : number[] = [];
    let greater : number[] = [];

    for(let i of list) {
      if (i < pivot) {
        lesser.push(i);
      } else if (i > pivot) {
        greater.push(i);
      }else{
        equal.push(i)
      }
    }

    return [lesser, equal, greater]
  }

  //TODO: there is another method called in place quick sort
}
