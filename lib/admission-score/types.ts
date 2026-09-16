export interface CheckResult {
  id: string;
  label: string;
  passed: boolean;
  detail: string;
  impact?: string;
  diyFix?: string;
  ernestPathFix?: string;
}

export interface CategoryResult {
  key: string;
  label: string;
  score: number; // 0-100
  checks: CheckResult[];
}

export interface AdmissionScoreResult {
  url: string;
  city: string;
  examFocus: string;
  overallScore: number;
  categories: CategoryResult[];
  scannedAt: string;
  warnings: string[];
}