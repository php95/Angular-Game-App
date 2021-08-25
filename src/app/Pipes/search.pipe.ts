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

    let resultArray = [];
    let nameLower;

    resultArray = value.filter((item)=>{

      nameLower = item.name.toLowerCase();
      return nameLower.includes(filterString.toLowerCase());

    })

    console.log(resultArray)
   
    return resultArray;
  }

}
