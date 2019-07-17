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

    return array.join(separator);
  }
}
