import { Params } from '@angular/router';

export function coalesce<T>(value: T, defaultValue: T): T {
    if (value == null) {
      return defaultValue;
    }
    return value;
}

export function whitelistKeys<T extends object>(obj: T, validKeys: string[]) {
  const result: T = {} as T;
  for (const key of validKeys) {
    result[key] = obj[key];
  }
  return result;
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
  /*tslint:disable:prefer-for-of*/
  // For this use-case specifically this version of the for loop is roughly
  // twice as fast as the for-of version (direct array access is faster than
  // assigning the values to variables on every iteration).
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      result[resultIdx] = arrays[i][j];
      resultIdx++;
    }
  }
  /*tslint:enable:prefer-for-of*/
  return result;
}

export function makeQueryString(params: Params): string {
  return Object.entries(params).map(e => `${e[0]}=${e[1]}`).join('&');
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
