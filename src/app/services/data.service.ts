import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  
  
  }
  getTodos(){
    return this.http.get('http://jsonplaceholder.typicode.com/todos');

  }
}
