import {Inject, Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {APP_BASE_HREF, DOCUMENT} from '@angular/common';
/**
 * Script responsible for loading scripts
 */
@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  /**
   * Cache needed to keep track of in-flight and resolved required scripts
   */
  private readonly scriptsByUrl: { [url: string]: Observable<any> } = {};
  constructor(
    @Inject(DOCUMENT) private readonly document: HTMLElement,
    @Optional() @Inject(APP_BASE_HREF) private readonly baseHref: string = '/'
  ) {}
  /**
   * Appends and caches loaded script for future lookup
   * @param url The path the the script file
   */
  require<T = any>(url: string): Observable<T> {
    const { scriptsByUrl, baseHref } = this;
    const host = document.body;
    // if the script was loaded, or is loading
    // return the existing or in-flight request
    if (scriptsByUrl[url] != null) {
      return scriptsByUrl[url];
    }
    return scriptsByUrl[url] = new Observable<void>(observer => {
      const script = host.ownerDocument.createElement('script');
      script.type = 'text/javascript';
      script.src = url.includes('://') ? url : baseHref + url;
      script.async = true;
      script.onerror = error => {
        observer.error(error);
      };
      script.onload = () => {
        observer.next();
        observer.complete();
      };
      host.appendChild(script);
    }).pipe(
      shareReplay()
    );
  }
}
