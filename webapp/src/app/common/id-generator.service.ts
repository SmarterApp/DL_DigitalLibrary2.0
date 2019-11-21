import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  private lastIdForNamespace = new Map<string, number>();

  nextId(namespace: string) {
    const nextId = this.lastIdForNamespace.has(namespace) ?
      this.lastIdForNamespace.get(namespace) + 1 :
      0;

    this.lastIdForNamespace.set(namespace, nextId);
    return namespace + '-' + nextId;
  }
}
