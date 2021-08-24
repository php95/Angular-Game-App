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
  images: Array<string> = []
  gamesSize: number = 0;
  games: Array<Object> = [];
  gameNames: Array<String> = [];
  loading: boolean = false;
  searchName: any = "";

  constructor(private crud: CrudService, private load: LoadingSpinnerService, private spinner: NgxSpinnerService, private pass: PassDataService) { }

  ngOnInit(): void {
    this.crud.getData().subscribe((data) => {
      if (data.hasOwnProperty('results')) {
        this.games = data.results;
        this.gamesSize = data.results.length;

        this.games.forEach((item, i) => {
          this.images[i] = data.results[i].background_image;
          this.gameNames[i] = data.results[i].name;

          this.loading = this.load.toggle();
          this.spinner.show();

        })
        // this.images=data.results.background_image;

      }
    })

    this.pass.getMessage().subscribe((message) => {
      this.searchName = message;

    })

    this.loading = this.load.toggle();
    this.spinner.hide();
  }


}
