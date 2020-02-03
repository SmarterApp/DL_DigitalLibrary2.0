import { Injectable, Injector } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { FileType, ResourceAttachment } from 'src/app/data/resource/model/attachment.model';

@Injectable({ providedIn: 'root' })
export class AttachmentsService {

  constructor(private dataService: DataService) {}

  download(attachment: ResourceAttachment) {
    this.dataService
      .downloadBlob(attachment.uri)
      .subscribe(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${attachment.name}.${attachment.fileExtension}`;
        link.hidden = true;
        link.type = attachment.mimeType;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(link.href);
          document.body.removeChild(link);
        }, 100);
      });
  }
}
