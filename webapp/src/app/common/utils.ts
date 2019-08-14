export function coalesce<T>(value: T, defaultValue: T): T {
    if(value == null) {
      return defaultValue;
    }

    return value;
}

export function getCssVar(cssVar: string) {
  return +getComputedStyle(document.documentElement).getPropertyValue(cssVar).replace('px', '');
}