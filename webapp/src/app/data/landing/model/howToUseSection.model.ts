export interface HowToUseSection {
    header: string;
    subSections : SubSections[];
}

export interface SubSections {
    sequenceNo: number;
    title: string;
    description: string;
}