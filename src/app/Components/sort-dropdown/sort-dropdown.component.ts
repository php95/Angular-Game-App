import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.scss']
})
export class SortDropdownComponent implements OnInit {

  constructor() { }

  genres:Array<string> = ['Name','Released','Metacritic','Added','Updated','Rating']
  selectedGenre:string = "Name";

  ngOnInit(): void {
  }
  getValue(e:any){
     this.selectedGenre= e.target.innerText;
  }

}
