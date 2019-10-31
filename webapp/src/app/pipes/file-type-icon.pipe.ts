import { Pipe, PipeTransform } from '@angular/core';
import { FileType } from '../data/resource/model/attachment.model';

@Pipe({
  name: 'fileTypeIcon'
})
export class FileTypeIconPipe implements PipeTransform {

  readonly fileTypeIconMap: Map<FileType, string> = new Map([
    [ FileType.Word, 'fa-file-word' ],
    [ FileType.Pdf, 'fa-file-pdf' ],
    [ FileType.Unknown, 'fa-file-alt' ],
    [ FileType.Audio, 'fa-file-music' ],
    [ FileType.Excel, 'fa-file-excel' ],
    [ FileType.Image, 'fa-file-image' ],
    [ FileType.PowerPoint, 'fa-file-powerpoint' ]
  ]);

  transform(value: FileType, args?: any): string {
    if (!value) {
      value = FileType.Unknown;
    }

    return this.fileTypeIconMap.get(value);
  }

}
