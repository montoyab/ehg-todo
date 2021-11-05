import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
   
  getData(key:any): any {
    let ls = localStorage.getItem(key);
    
    if(ls){
      return JSON.parse(ls);
    }
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
