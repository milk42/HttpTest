import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Ipost } from './ipost';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> { // typé Observable, si j'utilise ce type, je dois importer l'import Observable
    return this.http.get('http://localhost:3000/users') as Observable<Iuser[]>;
  }

  getPosts(): Observable<Ipost[]> {
    return this.http.get('http://localhost:3000/posts') as Observable<Ipost[]>;
  }
}
