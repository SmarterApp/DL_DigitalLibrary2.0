import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppConfig } from './config.model';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {
    static settings: IAppConfig;
    constructor(private http: HttpClient) { }
    load() {
        const jsonFile = 'assets/config/config.json';
        return new Promise<void>((resolve, reject) => {
          this.http.get(jsonFile).subscribe(response => {
              AppConfig.settings = <IAppConfig>response;
              resolve();
          }, error =>  {
            let message = error.error.message
                ? error.error.message
                : error.error;

              reject(`Unable to load configurations from file '${jsonFile}': ${message}`);
          });
        });
    }
}
