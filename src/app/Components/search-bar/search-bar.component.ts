import { Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/Services/pass-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private pass:PassDataService) { }

  ngOnInit(): void {
  }
  Search(data:any){

    this.pass.sendMessage(data.form.value.Search);
  }

}
