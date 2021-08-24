import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { SortDropdownComponent } from './Components/sort-dropdown/sort-dropdown.component';
import { CardComponent } from './Components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './Pipes/search.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchBarComponent,
    HomeComponent,
    SortDropdownComponent,
    CardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
