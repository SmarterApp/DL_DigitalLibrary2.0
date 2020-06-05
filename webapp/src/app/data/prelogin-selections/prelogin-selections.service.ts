import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';
import { PreloginSelection } from './model/prelogin-selection.model';
import { Observable } from 'rxjs';
import { preloginSelectionsOrdering } from '../prelogin-selections/prelogin-selections-ordering';
import { Comparator, on, byOrdering } from 'src/app/common/sorting/sorting';

const bySelectionCode: Comparator<PreloginSelection> = on(x => x.selectionCode, byOrdering(preloginSelectionsOrdering));

@Injectable({
  providedIn: 'root'
})
export class PreloginSelectionsService {

  constructor(private dataService: DataService) { }

  getAll(): Observable<any> {
    return this.dataService
      .get(`/api/dl_prelogin_selections`)
      .pipe(
        map((resp:any[]) => ({
          result: this.getSelections(resp['hydra:member'])
        })
      ));
  }

  getSelections(values: any[]): PreloginSelection[] {
    const items = values.map(this.preloginSelectionFromJson);
    const sorted = items.sort(bySelectionCode);
    
    return sorted;
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
