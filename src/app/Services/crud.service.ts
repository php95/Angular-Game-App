import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  getData() {

   return this.http.get<any>('https://rawg-video-games-database.p.rapidapi.com/games?key=ea3dcf01403e4356bce6faa63a08e8eb', {
      headers: new HttpHeaders(
        {

          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          'x-rapidapi-key': 'f6b2164ea7mshd0a3a0c961ea086p1a606ejsn1e7f199b3531'

        })
    })

  }
}
