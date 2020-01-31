import { Pipe, PipeTransform } from '@angular/core';

const placeholderImageUrl = '/assets/images/image-missing-placeholder.png';

function isBlank(value: string): boolean {
  return value == null
    || value.trim().length === 0;
}


/**
 * Pipe to replace a missing image url with a default placeholder.
 */
@Pipe({
  name: 'replaceNullImage'
})
export class ReplaceNullImagePipe implements PipeTransform {

  transform(value: string): string {
    return isBlank(value)
      ? placeholderImageUrl
      : value;
  }
}
