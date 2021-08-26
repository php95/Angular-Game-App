import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.scss']
})
export class SortDropdownComponent implements OnInit {

  constructor() { }

  genres:Array<string> = ['Action']

  ngOnInit(): void {
  }

}
