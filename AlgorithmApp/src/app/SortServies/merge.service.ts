import { Injectable } from '@angular/core';

@Injectable()
export class MergeService {

  constructor() {
  }

  sort(data: number[]){
    console.info("merge sort applied");
    let start = performance.now();
    //base case
    if(data.length < 2){
      return data;
    }

    let [left, right] = this.partition(data);
    data = this.merge(this.sort(left), this.sort(right));
    console.info("merge sort time taken " + (performance.now() - start) + " milliseconds.");
    return data;
  }

  partition(list: number[]) : [number[], number[]]{
    //need to floor or else 2.5 will return
    let middle = Math.floor(list.length/2);

    let left : number[] = list.slice(0, middle);
    let right : number[] = list.slice(middle);

    return [left, right]
  }

  merge(left : number[], right: number[]): number[]{
    let arr:number[] = [];

    while(left.length > 0 && right.length > 0){
      if(left[0] < right[0]){
        arr.push(left.shift());
      }else{
        arr.push(right.shift());
      }
    }

    //after this stage sometime more of right/left are merged, the rest will have to be slice in later
    return arr.concat(left.slice()).concat(right.slice());
  }

}
