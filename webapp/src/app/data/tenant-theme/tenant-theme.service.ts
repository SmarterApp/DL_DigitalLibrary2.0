import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from 'src/app/common/config/app.config';
import { LoggingService } from 'src/app/common/logging/logging.service';
import { TenantTheme, TenantThemeConfig } from './tenant-theme.model';
import { User } from 'src/app/data/user/user.model';

const DEFAULT_TENANT_ID = 'default';

@Injectable({
  providedIn: 'root'
})
export class TenantThemeService {

  private tenantThemeConfig$ = new ReplaySubject<TenantThemeConfig>(1);

  constructor(private http: HttpClient, private logger: LoggingService) {
    this.load(AppConfig.settings.tenantConfigPath);

    this.tenantThemeConfig$.subscribe(() => {}, error => this.logger.error(error));
  }

  public get tenantThemeConfig(): Observable<TenantThemeConfig> {
    return this.tenantThemeConfig$.asObservable();
  }

  public getTenantTheme(user: User): Observable<TenantTheme> {
    return this.tenantThemeConfig.pipe(
      map(cfg => {
        let tenantId = DEFAULT_TENANT_ID;
        if (user) {
          tenantId = user.tenantIds.find(id => !!cfg[id]);
        }
        return cfg[tenantId] || cfg[DEFAULT_TENANT_ID];
      })
    );
  }

  load(configPath: string) {
    this.http.get(configPath).subscribe(
      resp => this.tenantThemeConfig$.next(resp as TenantThemeConfig),
      error => {
        const message = error.error.message
                        ? error.error.message
                        : error.error;

        this.tenantThemeConfig$.error(
          `Unable to load tenant theme config from file '${configPath}': ${message}`);
      }
    );
  }
}
