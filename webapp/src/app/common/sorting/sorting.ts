/**
 * Represents a javascript comparator passed to {@link Array#sort}
 */
export type Comparator<T> = (a: T, b: T) => number;

/**
 * Represents a field getter used to get a specific field on an object for sorting
 */
export type FieldAccessor<T, U> = (object: T) => U;

/**
 * Represents a reverisble comparator
 */
export interface ReversibleComparator<T> extends Comparator<T> {
  descending(): Comparator<T>;
}

/**
 * Creates null-last comparator
 */
function byNullLast<T>(): Comparator<T> {
  return (a: T, b: T) => {
    if (a == null && b != null) {
      return 1;
    }
    if (a != null && b == null) {
      return -1;
    }
    // prevents null checking down the line
    if (a == null && b == null) {
      return -1;
    }
    return 0;
  };
}

/**
 * Creates natural-ordering comparator
 */
function byNaturalOrdering<T>(): ReversibleComparator<T> {
  return createReversible(
    (a: any, b: any) => a - b
  );
}

/**
 * A string comparator factory
 * Use this when comparing string values
 */
export function byString(): ReversibleComparator<string> {
  return createReversible(
    comparing(
      byNullLast(),
      (a, b) => a.localeCompare(b)
    )
  );
}

/**
 * A string comparator factory
 * Use this to smartly recognize numbers and detect case-insensitive
 * when comparing string values
 */
export function byStringWithNumber(): ReversibleComparator<string> {
  return createReversible(
    comparing(
      byNullLast(),
      (a, b) =>
        a.localeCompare(b,
          undefined,
          {numeric: true, sensitivity: 'base'
          })
    )
  );
}

/**
 * Creates and returns a comparator given the rankings
 * @param ordering The ordered set of primitives of the same type to use for sorting
 */
export function byOrdering<T>(ordering: T[]): ReversibleComparator<T> {
  return createReversible(
    comparing(
      byNullLast(),
      (a, b) => {
        const indexA = ordering.findIndex(x => x === a);
        const indexB = ordering.findIndex(x => x === b);
        if (indexA < indexB) {
          return -1;
        }
        if (indexA > indexB) {
          return 1;
        }
        return 0;
      }
    )
  );
}

/**
 * Use this when comparing fields on a given object
 * @param fieldAccessor The method used to get the field value
 * @param comparator The comparator to use (this will default to default primitive comparison if not provided)
 */
export function on<T, U = any>(
  fieldAccessor: FieldAccessor<T, U>,
  comparator: Comparator<U> = byNaturalOrdering()
): ReversibleComparator<T> {
  return createReversible(
    (a, b) => comparator(
      fieldAccessor(a),
      fieldAccessor(b)
    )
  );
}

/**
 * Creates a composite comparator
 * @param comparators The comparators to compose in the order desired ordering
 */
export function comparing<T>(...comparators: Comparator<T>[]): Comparator<T> {
  return (a: T, b: T) => {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < comparators.length; i++) {
      const comparison = comparators[i](a, b);
      if (comparison !== 0) {
        return comparison;
      }
    }
    return 0;
  };
}


/**
 * Creates a reversible comparator
 * @param comparator The comparator to make reversible
 */
function createReversible<T>(comparator: Comparator<T>): ReversibleComparator<T> {
  const reversible = (a, b) => comparator(a, b);
  reversible.descending = () => (a, b) => comparator(b, a);
  return reversible;
}
