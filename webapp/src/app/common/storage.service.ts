import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  readonly searchLoginWarningDisplayedKey = 'SearchLoginWarningDisplayed';

  constructor() { }

  get(key: string) {
    return sessionStorage.getItem(key);
  }

  set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  getSearchLoginWarningDisplayed() {
    if (!sessionStorage.getItem(this.searchLoginWarningDisplayedKey)) {
      this.setSearchLoginWarningDisplayed('false');
    }

    return sessionStorage.getItem(this.searchLoginWarningDisplayedKey);
  }

  setSearchLoginWarningDisplayed(value: string) {
    sessionStorage.setItem(this.searchLoginWarningDisplayedKey, value);
  }
}