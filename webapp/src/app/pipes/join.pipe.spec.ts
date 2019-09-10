import { JoinPipe } from "./join.pipe";

describe('Join.PipePipe', () => {
  it('create an instance', () => {
    const pipe = new JoinPipe();
    expect(pipe).toBeTruthy();
  });

  it('should join arrays', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple', 'Banana', 'Carrots']);
    expect(actual).toBe('Apple, Banana, Carrots');
  });

  it('should join arrays with a custom seperator', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple', 'Banana', 'Carrots'], { separator: '|'});
    expect(actual).toBe('Apple|Banana|Carrots');
  });

  it('should join arrays with a custom fields', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform([{ name: 'Apple' },{ name: 'Banana' },{ name: 'Carrots' }], { field: 'name' });
    expect(actual).toBe('Apple, Banana, Carrots');
  });

  it('should join arrays with a conjunction', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple', 'Banana', 'Carrots'], { conjunction: 'and' });
    expect(actual).toBe('Apple, Banana, and Carrots');
  });

  it('should join array and use conjuction instead of separator for count of 2', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple', 'Carrots'], { conjunction: 'and' });
    expect(actual).toBe('Apple and Carrots');
  });

  it('should join array and not use conjuction for count of 1', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple'], { conjunction: 'and' });
    expect(actual).toBe('Apple');
  });
});
