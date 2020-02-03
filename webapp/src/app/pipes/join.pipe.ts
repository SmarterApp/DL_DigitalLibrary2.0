import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

/**
 * Pipe to join an array to a string.
 */
@Pipe({ name: 'join' })
export class JoinPipe implements PipeTransform {

  transform(value: any, args?: JoinPipeArgs): string {
    if (!isArray(value)) {
      return value;
    }

    const array = args && args.field ? value.map(x => x[args.field]) :  value;
    const separator = args && args.separator ? args.separator : ', ';
    const conjunction = args && args.conjunction ? args.conjunction : undefined;
    const prepend = args && args.prepend ? args.prepend : '';

    const joinedString = array.map(x => prepend + x).join(separator);

    if (!conjunction) {
      return joinedString;
    }

    const lastIndex = joinedString.lastIndexOf(separator);
    return joinedString.slice(0, lastIndex)
      + joinedString
        .slice(lastIndex)
        .replace(separator, (array.length > 2 ? separator : ' ') + conjunction + ' ');
  }
}

/**
 * Arguments that can be passed to the join pipe
 */
export interface JoinPipeArgs {
  /**
   * Custom separator between each value.  Defaults to ", "
   */
  separator?: string;

  /**
   * If the array is of complex type, the field on the complex type to join on.
   */
  field?: string;

  /**
   * A conjuction to be placed at the end before the last item of a joined string.  Example: 1, 2, AND 3
   */
  conjunction?: string;

  /**
   * What to place at the beginning of each string, if anything at all.
   */
  prepend?: string;
}
