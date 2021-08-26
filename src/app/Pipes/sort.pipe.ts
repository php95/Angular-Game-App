import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, sortString: any) {

    if (sortString == "")
      return value;

    value = value.sort((item1:any,item2:any)=>{
      
      return item1[sortString] - item2[sortString];
    })  
    console.log(value);
    return value;

  }

}
