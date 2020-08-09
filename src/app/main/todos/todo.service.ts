import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiEndpointsEnum} from '../../models/constants/ApiEndpoints.enum';
import {Todo} from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(ApiEndpointsEnum.TODOS_ENDPOINT);
  }
}
