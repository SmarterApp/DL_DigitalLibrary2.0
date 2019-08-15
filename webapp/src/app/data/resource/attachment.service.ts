import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttachmentModel, FileType } from './model/attachment.model';
import { DataService } from '../data.service';
import { coalesce } from 'src/app/common/utils';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  readonly fileExtensionToFileTypeMap: Map<string, FileType> = new Map([
    [ '.docx', FileType.Word ],
    [ '.pdf', FileType.Pdf ]
  ]);

  constructor(private dataService: DataService) { }

  get(id: number): Observable<AttachmentModel> {
    return this.dataService
      .get(`/file_documents/${id}`)
      .pipe(map(apiModel => this.mapToAttachment(apiModel)));
  }

  mapToAttachment(apiAttachment: any):AttachmentModel {
    const filename = apiAttachment.name;
    const fileExtension = filename.substring(filename.lastIndexOf('.'));

    return <AttachmentModel>{
      title: apiAttachment.name,
      id: apiAttachment.id,
      downloadUrl: "/api/file_documents/" + apiAttachment.id + "/download",
      fileType: coalesce(this.fileExtensionToFileTypeMap.get(fileExtension), FileType.Unknown),
      filename: filename,
      fileExtension: fileExtension,
      fileSizeInKB: apiAttachment.fileSize ? Math.round(apiAttachment.fileSize / 1000): undefined,
      type: apiAttachment['@type']
    };
  }
}
