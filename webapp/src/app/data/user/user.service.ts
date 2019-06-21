import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService: DataService) { }

  getCurrentUser(): Observable<UserModel> {
    return this.dataService
      .get('/userinfo')
      .pipe(map(x => this.mapToModel(x)));
  }

  private mapToModel(apiResult: any): UserModel {
    return <UserModel> {
      firstName: apiResult.firstName,
      lastName: apiResult.lastName,
      tenantName: apiResult.tenantName
    };
  }
}
