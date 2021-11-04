import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import * as fromTodoListSelectors from '../store/todo-list/selectors';
import { setNewItem } from 'src/app/store/todo-list/actions';
import { v4 as uuid } from 'uuid';

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
      response => {
      this.todoListSubject.next(response);
      
      response.forEach(item =>{
        this.addItem(item.title, item.completed || false);
      })

      }
    );
  }

  addItem(title: string, completed:boolean) {
     this.store.dispatch(setNewItem({item: {_id: uuid(), title: title, completed: completed}})); 
  }

  getTodoList() {
    return this.todoListSubject.asObservable();
  }

}
