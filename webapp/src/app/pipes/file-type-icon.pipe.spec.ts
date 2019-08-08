import { FileTypeIconPipe } from './file-type-icon.pipe';
import { FileType } from '../data/resource/model/attachment.model';

describe('FileTypeIconPipe', () => {
  it('create an instance', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe).toBeTruthy();
  });
  it('return Word icon for word file type', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(FileType.Word)).toBe('fa-file-word');
  });
  it('return PDF icon for pdf file type', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(FileType.Pdf)).toBe('fa-file-pdf');
  });
  it('return a default for unknown file type', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(FileType.Unknown)).toBe('fa-file-alt');
  });
  it('return a default for null input', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(null)).toBe('fa-file-alt');
  });
});
