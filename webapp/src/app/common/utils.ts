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
