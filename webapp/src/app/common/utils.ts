export function coalesce<T>(value: T, defaultValue: T): T {
    if(value == null) {
      return defaultValue;
    }

    return value;
}