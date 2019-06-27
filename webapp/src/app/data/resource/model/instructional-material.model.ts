// UNKNOWN endpoint to provide this.
export interface InstructionalMaterialModel {

    // Name of Instructional Maeterial
    title: string;

    // byte array to stream material data (as doc, video, pdf, etc. ?)
    data: Uint8Array;

    // OR

    // url in which calling a GET will stream the file data.
    dataUrl: string;
}