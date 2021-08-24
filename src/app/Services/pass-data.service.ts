import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  private subject = new Subject<any>();

  sendMessage(message: string) {
      this.subject.next( message );
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }
}
