import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import * as fromTodoListSelectors from '../store/todo-list/selectors';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();

  constructor(private storageService: StorageService,
              private http: HttpClient,
              private store: Store<State>) {
    this.retrieveListFromDataBase();
    this.retrieveListFromStore();
  }

  retrieveListFromStore() {
    this.store.select(fromTodoListSelectors.getTodoItems).subscribe(value => this.todoListSubject.next(value));
  }

  retrieveListFromDataBase() {
    this.http.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos').subscribe(
      response => this.todoListSubject.next(response)
    );
  }

  getTodoList() {
    return this.todoListSubject.asObservable();
  }

}
