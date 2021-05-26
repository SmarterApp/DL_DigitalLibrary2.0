export interface api2pdfResponce {
    success: boolean;
    error: string | null;
    pdf?: string;
    mbIn?: number;
    mbOut?: number;
    cost?: number;
    responseId?: string;
} 