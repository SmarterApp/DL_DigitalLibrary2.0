import { FileTypeIconPipe } from './file-type-icon.pipe';
import { FileType } from '../data/resource/model/attachment.model';

describe('FileTypeIconPipe', () => {
  it('create an instance', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe).toBeTruthy();
  });
  it('return Word icon for word file type', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(FileType.Word)).toBe('far fa-file-word');
  });
  it('return PDF icon for pdf file type', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(FileType.Pdf)).toBe('far fa-file-pdf');
  });
  it('return YouTube icon for YouTube file type', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(FileType.YouTubeLink)).toBe('fab fa-youtube');
  });
  it('return a default for unknown file type', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(FileType.Unknown)).toBe('far fa-file-alt');
  });
  it('return a default for null input', () => {
    const pipe = new FileTypeIconPipe();
    expect(pipe.transform(null)).toBe('far fa-file-alt');
  });
});
