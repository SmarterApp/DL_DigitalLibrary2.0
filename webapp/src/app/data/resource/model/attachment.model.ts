export interface ResourceAttachment {
  name: string;
  category: string;
  uri: string;
  fileType: FileType;
  fileSize: number;
}

export enum FileType {
  Unknown,

  Audio,
  Excel,
  Image,
  Pdf,
  PowerPoint,
  Word
}

const mimeTypeToFileTypeMap: Map<string, FileType> = new Map([
  ['application/pdf', FileType.Pdf],
  ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', FileType.Word ],
  ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', FileType.Excel ],
  ['application/vnd.openxmlformats-officedocument.presentationml.presentation', FileType.PowerPoint ],
  ['image/png', FileType.Image ],
  ['image/jpg', FileType.Image ],
  ['image/jpeg', FileType.Image ],
  ['image/png', FileType.Image ],
  ['image/bpm', FileType.Image ],
  ['image/gif', FileType.Image ],
  ['audio/vnd.wav', FileType.Audio ],
  ['audio/aac', FileType.Audio ],
  ['audio/mpeg3', FileType.Audio ],
  ['audio/mpeg', FileType.Audio ],
  ['audio/ogg', FileType.Audio ],
  ['audio/flac', FileType.Audio ]
]);

export function getFileTypeForMimeType(mimeType: string): FileType {
  if (mimeTypeToFileTypeMap.has(mimeType)) {
    return mimeTypeToFileTypeMap[mimeType];
  } else {
    return FileType.Unknown;
  }
}
