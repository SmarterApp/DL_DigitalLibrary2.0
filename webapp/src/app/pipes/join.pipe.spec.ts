import { JoinPipe, JoinPipeArgs } from "./join.pipe";

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
    const actual = pipe.transform(['Apple', 'Banana', 'Carrots'], <JoinPipeArgs>{ separator: '|'});
    expect(actual).toBe('Apple|Banana|Carrots');
  });

  it('should join arrays with a custom fields', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform([{ name: 'Apple' },{ name: 'Banana' },{ name: 'Carrots' }], <JoinPipeArgs>{ field: 'name' });
    expect(actual).toBe('Apple, Banana, Carrots');
  });

  it('should join arrays with a conjunction', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple', 'Banana', 'Carrots'], <JoinPipeArgs>{ conjunction: 'and' });
    expect(actual).toBe('Apple, Banana, and Carrots');
  });

  it('should join array and use conjuction instead of separator for count of 2', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple', 'Carrots'], <JoinPipeArgs>{ conjunction: 'and' });
    expect(actual).toBe('Apple and Carrots');
  });

  it('should join array and not use conjuction for count of 1', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple'], <JoinPipeArgs>{ conjunction: 'and' });
    expect(actual).toBe('Apple');
  });

  it('should join array and prepend', ()=> {
    const pipe = new JoinPipe();
    const actual = pipe.transform(['Apple', 'Banana', 'Carrots'], <JoinPipeArgs>{ prepend: 'Food '});
    expect(actual).toBe('Food Apple, Food Banana, Food Carrots');
  });
});
