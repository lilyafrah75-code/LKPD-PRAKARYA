
export type TargetMarket = 'Anak-anak' | 'Remaja' | 'Dewasa';

export interface WorksheetData {
  fullName: string;
  className: string;
  productChoice: string;
  productName: string;
  targetMarket: TargetMarket | null;
  keywords: [string, string, string];
  primaryColor: string;
  colorReason: string;
  designFile: File | null;
}

export interface GeminiResponse {
  productName: string;
  targetMarket: TargetMarket;
  keywords: [string, string, string];
  primaryColor: string;
  colorReason: string;
}
