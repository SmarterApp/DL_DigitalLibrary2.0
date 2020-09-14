import { Injectable } from '@angular/core';
import { SessionStateKey } from './enums/session-state-key.enum';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string) {
    return sessionStorage.getItem(key);
  }

  set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  remove(key: string){
    sessionStorage.removeItem(key);
  }

  getLoginWarningDisplayed(key: SessionStateKey): boolean {
    if (!sessionStorage.getItem(key)) {
      this.setLoginWarningDisplayed(key, false);
    }

    return (sessionStorage.getItem(key) === 'true');
  }

  setLoginWarningDisplayed(key: SessionStateKey, value: boolean) {
    sessionStorage.setItem(key, value.toString());
  }
}
