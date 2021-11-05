import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { StoreModule  } from '@ngrx/store';
import { metaReducers, reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    ListManagerComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
