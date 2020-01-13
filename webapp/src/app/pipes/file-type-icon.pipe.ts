import { Pipe, PipeTransform } from '@angular/core';
import { FileType } from '../data/resource/model/attachment.model';

@Pipe({
  name: 'fileTypeIcon'
})
export class FileTypeIconPipe implements PipeTransform {

  readonly fileTypeIconMap: Map<FileType, string> = new Map([
    [ FileType.Word, 'far fa-file-word' ],
    [ FileType.Pdf, 'far fa-file-pdf' ],
    [ FileType.Unknown, 'far fa-file-alt' ],
    [ FileType.Audio, 'far fa-file-music' ],
    [ FileType.Excel, 'far fa-file-excel' ],
    [ FileType.Image, 'far fa-file-image' ],
    [ FileType.PowerPoint, 'far fa-file-powerpoint' ],
    [ FileType.YouTubeLink, 'fab fa-youtube' ],
    [ FileType.VideoLink, 'far fa-play-circle' ],
    [ FileType.VimeoLink, 'fab fa-vimeo' ]
  ]);

  transform(value: FileType, args?: any): string {
    if (!value) {
      value = FileType.Unknown;
    }

    return this.fileTypeIconMap.get(value);
  }

}
