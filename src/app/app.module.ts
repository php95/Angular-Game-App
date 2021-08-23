import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { SortDropdownComponent } from './Components/sort-dropdown/sort-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchBarComponent,
    HomeComponent,
    SortDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
