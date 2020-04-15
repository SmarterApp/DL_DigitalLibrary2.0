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

  getSearchLoginWarningDisplayed(): boolean {
    if (!sessionStorage.getItem(this.searchLoginWarningDisplayedKey)) {
      this.setSearchLoginWarningDisplayed(false);
    }

    const sessionVal = sessionStorage.getItem(this.searchLoginWarningDisplayedKey);
    return (sessionVal === 'true');
  }

  setSearchLoginWarningDisplayed(value: boolean) {
    sessionStorage.setItem(this.searchLoginWarningDisplayedKey, value.toString());
  }
}