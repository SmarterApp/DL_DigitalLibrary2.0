import {byOrdering, byString, byStringWithNumber, on} from './sorting';

describe('byString', () => {
  it('should sort by string', () => {
    expect(['c', 'b', 'a'].sort(byString())).toEqual(['a', 'b', 'c']);
  });
  it('should sort nulls to the end', () => {
    expect([null, 'b', 'a'].sort(byString())).toEqual(['a', 'b', null]);
    expect(['b', 'a', null].sort(byString())).toEqual(['a', 'b', null]);
    expect(['b', null, 'a'].sort(byString())).toEqual(['a', 'b', null]);
  });
  it('should be reversible', () => {
    expect(['a', 'b', 'c'].sort(byString().descending())).toEqual(['c', 'b', 'a']);
  });
});

describe('byOrdering', () => {
  it('should sort by ordering', () => {
    expect(['c', 'b', 'a'].sort(byOrdering(['a', 'b', 'c']))).toEqual(['a', 'b', 'c']);
  });
  it('should sort nulls to the end', () => {
    expect([null, 'b', 'a'].sort(byOrdering(['a', 'b', 'c']))).toEqual(['a', 'b', null]);
    expect(['b', 'a', null].sort(byOrdering(['a', 'b', 'c']))).toEqual(['a', 'b', null]);
    expect(['b', null, 'a'].sort(byOrdering(['a', 'b', 'c']))).toEqual(['a', 'b', null]);
  });
  it('should be reversible', () => {
    expect(['a', 'b', 'c'].sort(byOrdering(['a', 'b', 'c']).descending())).toEqual(['c', 'b', 'a']);
  });
});

describe('byStringWithNumber', () => {
  it('should sort by string with number', () => {
    expect(['CO-18', 'CO-2', 'CO-11'].sort(byStringWithNumber())).toEqual(['CO-2', 'CO-11', 'CO-18']);
  });
});

describe('on', () => {
  it('should use provided field accessor and comparator', () => {
    expect(
      [
        { code: 'c' },
        { code: 'b' },
        { code: 'a' }
      ].sort(
        on(x => x.code, byString())
      )
    ).toEqual([
      { code: 'a' },
      { code: 'b' },
      { code: 'c' }
    ]);
  });
});
