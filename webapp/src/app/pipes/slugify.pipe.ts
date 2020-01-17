import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return slugify(value, args);
  }
}

export function slugify(value: string, args?: any): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/[\s-]+/g, '-');
}
