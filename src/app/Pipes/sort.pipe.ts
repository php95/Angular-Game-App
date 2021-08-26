import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, sortString: any, type: any) {

    if (sortString == "")
      return value;
      
    if (type === "number") {

      value = value.sort((item1: any, item2: any) => {

        return item1[sortString] - item2[sortString];

      })

    }
    else if (type === "string")
    {
     value= value.sort(function(x,y) {
        if (x[sortString]< y[sortString]) return -1;
        if (x[sortString]> y[sortString]) return 1;
        return 0;
      })
    }
    console.log(value);
    return value;

  }

}
