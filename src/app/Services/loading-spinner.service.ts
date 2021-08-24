import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  constructor() { }
  loading = false;
  toggle ():boolean {
    this.loading = !this.loading;
    return this.loading
  }
}
