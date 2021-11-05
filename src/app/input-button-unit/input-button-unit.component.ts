import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  
  @Output() submitItem: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  title = 'Buy pancakes for kids';
  
  submitValue(newTitleForm: NgForm) {
    if (newTitleForm.valid) {
      this.submitItem.emit(newTitleForm.value.title);
      newTitleForm.resetForm();
    } else {
      alert('Title is require');
    }
  }

}
