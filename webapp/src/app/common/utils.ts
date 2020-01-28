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

export function urlPathPart(url: string): string {
  const PATH_REGEX = /(^[^?&;#]+)/;
  return url.match(PATH_REGEX)[1] || '';
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
