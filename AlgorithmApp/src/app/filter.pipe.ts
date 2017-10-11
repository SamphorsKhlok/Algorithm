import { Pipe, PipeTransform } from '@angular/core';
import { HeapService } from "./SortServies/heap.service";
import { SelectionService} from "./SortServies/selection.service";
import { InsertionService} from "./SortServies/insertion.service";
import {MergeService} from "./SortServies/merge.service";
import {QuickService} from "./SortServies/quick.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let typeFilter = args[0] || 'default';
    if(typeFilter == 'heap') {
      let heap = new HeapService(value);
      return heap.sort();
    }else if(typeFilter == 'selection'){
      let selection = new SelectionService(value);
      return selection.sort();
    }else if(typeFilter == 'insertion') {
      let insertion = new InsertionService(value);
      return insertion.sort();
    }else if(typeFilter == 'merge'){
      let merge = new MergeService();
      return merge.sort(value);
    }else if(typeFilter == 'quick'){
      let quick = new QuickService();
      return quick.sort(value);
    }else{
      let start = performance.now();
      value.sort(function(a:number, b:number): number{
        if(a>b) {
          return -1;
        }else if(a<=b) {
          return 1;
        }
        return 0;
      });

      console.info("default sort time taken " + (performance.now() - start) + " milliseconds.");
      return value;
    }

  }


}
