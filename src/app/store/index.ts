import {
    ActionReducerMap,
    MetaReducer,
    ActionReducer
  } from '@ngrx/store';

  import { TodoListState } from 'src/app/store/todo-list/reducers';
  import * as fromTodoListReducers from './todo-list/reducers';
  
  import { localStorageSync } from 'ngrx-store-localstorage';

  export interface State {
    todoList: TodoListState,
  }
  
  export const reducers: ActionReducerMap<State> = {
    todoList: fromTodoListReducers.reducer
  };
  
  export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: ['todoList'], rehydrate: true})(reducer);
  }
   
 export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
  