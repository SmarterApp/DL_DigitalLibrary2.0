import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { FavoriteResource } from './model/favorite-resource.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private dataService: DataService) { }

  postFavoriteResource(favoriteResource: FavoriteResource): Observable<FavoriteResource> {
    const apiModel = this.mapFavoriteResourceToApi(favoriteResource);
    return this.dataService
      .post('/favorites/resource', apiModel)
      .pipe(map(res => this.mapApiToFavoriteResource(res)));
  }

  private mapFavoriteResourceToApi(uiModel: FavoriteResource) {
    return {
      resourceId: uiModel.resourceId,
      favorite: uiModel.favorite
    };
  }

  private mapApiToFavoriteResource(apiModel: any): FavoriteResource {
    return {
      resourceId: apiModel.resourceId,
      favorite: apiModel.favorite
    }
  }
}
