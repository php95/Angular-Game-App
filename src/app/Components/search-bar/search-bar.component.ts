import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PassDataService } from 'src/app/Services/pass-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit {

  constructor(private pass:PassDataService,private cdr: ChangeDetectorRef) { }
  
  searchText:string = ""; 

  ngOnInit(): void {
  }
  Search(data:any){
    this.pass.sendMessage(this.searchText);
    
  }

}
