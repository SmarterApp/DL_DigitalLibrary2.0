import { ResourceTypePipe } from './resource-type.pipe';
import { ResourceType } from '../data/resource/model/resource-type.enum';

describe('ResourceTypePipe', () => {
  it('create an instance', () => {
    const pipe = new ResourceTypePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a mapped resource type', () => {
    const pipe = new ResourceTypePipe();
    expect(pipe.transform(ResourceType.Instructional)).toBe('Instructional Resource');
  });

  it('should return empty string for unmapped resource type', () => {
    const pipe = new ResourceTypePipe();
    expect(pipe.transform(-100)).toBe('');
  });
});
