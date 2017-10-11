import { Injectable } from '@angular/core';

@Injectable()
export class HeapService {
  seq : number[];

  constructor(data: number[]) {
    this.seq = data;
  }

  //Heap sort
  //keyComparisons:number = 0;

  sort() : number[]{
    console.info("heap sort applied");
    this.heapify();  // build the heap from the bottom up
    //console.info("Key Comparisons =" + this.keyComparisons);

    // sort the array by swapping the first with the last
    // and disconnect the last from the heap
    // repeat the step
    let last:number = this.seq.length-1;
    while (last > 0) {
      let maxElem:number = this.seq[0];
      this.seq[0] = this.seq[last];
      this.seq[last] = maxElem;   // move max into its sorted position
      last--;                     // increase size of sorted elements
      this.downHeap(this.seq, last, 0);    // restore heap order property
    }

    console.info("after sort the array");
    console.log(this.seq);

    return this.seq;
  }

  // Private Helper Methods
  private heapify() {
    console.info("Heapified");
    // build the heap from the bottom up in O(n) time

    let last:number = this.seq.length-1;
    let next:number = last;

    if (last > 0 && (last/2)*2 != last) { // if last is odd number > 0
      this.downHeap(this.seq, last, this.parent(last));
      next--;
    }

    while (next > 1) {
      this.downHeap(this.seq, last, this.parent(next));
      next = next - 2;
    }

    console.log(this.seq);
  }

  private downHeap(seq: number[], last:number, index: number) {
    let right:number = 2*(index+1);
    let left:number = right-1;
    let largest:number = index;

    if (left <= last && seq[largest] < seq[left]) {
      largest = left;
    }

    if (right <= last && seq[largest] < seq[right]) {
      largest = right;
    }

    //this.keyComparisons = this.keyComparisons + 2;
    if (largest != index) {
      let temp:number = seq[index];
      seq[index] = seq[largest];
      seq[largest] = temp;
      this.downHeap(seq, last, largest);
    }
  }

  private parent(index:number): number {
    return (index-1)/2;
  }

}
