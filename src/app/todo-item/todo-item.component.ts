import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from './../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: !this.item.completed
    });
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  updateItem(){
    
  }
}
