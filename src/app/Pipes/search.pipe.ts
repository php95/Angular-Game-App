import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<any>, filterString:any) {

    if(value.length === 0 || filterString === "")
    {
      return value;
    }

    const resultArray = [];

    for(let item in value)
    {
      if(value[item].name === filterString)
      {

        resultArray.push(value[item]);
      }
  
    }
    console.log(resultArray)
   
    return resultArray;
  }

}
