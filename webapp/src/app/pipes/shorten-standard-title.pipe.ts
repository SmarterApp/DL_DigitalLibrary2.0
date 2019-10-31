import { Pipe, PipeTransform } from '@angular/core';
import { Standard } from '../data/resource/model/standard.model';

@Pipe({
  name: 'shortenStandardTitle'
})
export class ShortenStandardTitlePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('.').slice(3).join('.');
  }
}
