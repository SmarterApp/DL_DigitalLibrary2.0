export function coalesce<T>(value: T, defaultValue: T): T {
    if(value == null) {
      return defaultValue;
    }

    return value;
}

// Note that this function expects to always find and return a numeric value.
export function getCssVar(cssVar: string, element?: HTMLElement) {
  return +getComputedStyle(element ? element : document.documentElement).getPropertyValue(cssVar).replace('px', '');
}

/**
 * See: https://jsperf.com/array-merge-performance
 */
export function fastArrayMerge<T>(arrays: T[][]): T[] {
    const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
    const result = Array(totalLength);
    let resultIdx = 0;
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        result[resultIdx] = arrays[i][j];
        resultIdx++;
      }
    }
    return result;
  }

/**
 * From: https://stackoverflow.com/questions/25312134/how-to-test-rendering-speed-in-angular
 */
export class Timer {
  readonly start = performance.now();

  constructor(private readonly name: string) {}

  stop() {
    const time = performance.now() - this.start;
    console.log('Timer: ', this.name, ' finished in ', Math.round(time), 'ms.');
  }
}
