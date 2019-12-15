import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to replace a missing image url with a default placeholder.
 */
@Pipe({ name: 'replaceNullImage' })
export class ReplaceNullImagePipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.trim().length === 0) {
      return '/assets/images/image-missing-placeholder.png';
    } else {
      return value;
    }
  }
}
