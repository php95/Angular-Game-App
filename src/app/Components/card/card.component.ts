import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { LoadingSpinnerService } from 'src/app/Services/loading-spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PassDataService } from 'src/app/Services/pass-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 
  games: Array<Object> = [];
  loading: boolean = false;
  searchName: any = "";
  

  constructor(private crud: CrudService, private load: LoadingSpinnerService, private spinner: NgxSpinnerService, private pass: PassDataService) { }

  ngOnInit(): void {
    this.crud.getData().subscribe((data) => {
      if (data.hasOwnProperty('results')) {

        this.games = data.results;
        this.loading = this.load.toggle();
        this.spinner.show();
        console.log(this.games);

      }
    })

    this.pass.getMessage().subscribe((message) => {
      this.searchName = message;

    })

    this.loading = this.load.toggle();
    this.spinner.hide();
  }


}
