import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({ name: 'join' })
export class JoinPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(!isArray(value)) {
      return value;
    }

    const array = args && args.field ? value.map(x => x[args.field]) :  value;
    const separator = args && args.separator ? args.separator : ', ';
    const conjunction = args && args.conjunction ? args.conjunction : undefined;

    const joinedString = array.join(separator);

    if(!conjunction)
      return joinedString;

    const lastIndex = joinedString.lastIndexOf(separator);
    return joinedString.slice(0, lastIndex) 
      + joinedString
        .slice(lastIndex)
        .replace(separator, (array.length > 2 ? separator : ' ') + conjunction + ' ');
  }
}
