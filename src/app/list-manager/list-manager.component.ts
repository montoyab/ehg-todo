import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { changeCompletedStatus, deleteTodoItem, setNewItem } from 'src/app/store/todo-list/actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  
  todoList!: Observable<TodoItem[]>;

  constructor(private todoListService: TodoListService, private store: Store<State>) { }

  ngOnInit(): void {
    
    this.todoList = this.todoListService.getTodoList();
  }
  
  addItem(title: string) {
     this.store.dispatch(setNewItem({item: {_id: uuid(), title: title, completed: false}}));
    
  }

  removeItem(item:any) {
     this.store.dispatch(deleteTodoItem({id: item._id}));
    
  }

  updateItem(item:any, changes:any) {
    console.log('update', item )
    this.store.dispatch(changeCompletedStatus({id: item._id, completed: changes}));
    
  }

}
