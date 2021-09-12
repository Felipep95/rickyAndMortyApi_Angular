import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Character } from '../Types/character';

@Injectable({
  providedIn: 'root'
})

// const URL = 'https://rickandmortyapi.com/api/character';

// const httpOptions = {
//   headers: new HttpHeaders({
//   'Content-Type':  'application/json',
//   })
// };

@Injectable()
export class CharacterService {

  URL = 'https://rickandmortyapi.com/api/character';

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(this.URL)
  }
}
