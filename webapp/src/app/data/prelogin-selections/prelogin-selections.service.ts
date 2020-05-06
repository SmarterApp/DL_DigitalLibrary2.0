import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { map, tap } from 'rxjs/operators';
import { PreloginSelection } from './model/prelogin-selection.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloginSelectionsService {

  constructor(private dataService: DataService) { }

  getAll(): Observable<PreloginSelection[]> {
    return this.dataService
      .get(`/api/dl_prelogin_selections`)
      .pipe(map(resp => resp['hydra:member'].map(this.preloginSelectionFromJson)));
  }

  preloginSelectionFromJson(json: any): PreloginSelection {
    return {
      preloginSelectionId: json.preloginSelectionId,
      selectionCode: json.selectionCode,
      selectionLabel: json.selectionLabel,
      oktaIdpId: json.oktaIdpId,
      infoText: json.infoText
    }
  }
}
