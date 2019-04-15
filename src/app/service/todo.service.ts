import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITodo} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get<ITodo[]> ('https://jsonplaceholder.typicode.com/todos');
  }
}
