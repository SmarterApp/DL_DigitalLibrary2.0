export interface AttachmentModel {
    id: number;
    title: string;
    fileType: FileType;
    fileSizeInKB: number;
    filename: string;
    fileExtension: string;
    downloadUrl: string;
    type: string;
}

export enum FileType {
    Unknown = 0,
    Word = 1,
    Pdf = 2
    // TODO: Define file types.
}
