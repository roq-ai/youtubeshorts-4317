import { SummaryInterface } from 'interfaces/summary';
import { GetQueryInterface } from 'interfaces';

export interface PdfInterface {
  id?: string;
  file_path: string;
  summary_id: string;
  created_at?: any;
  updated_at?: any;

  summary?: SummaryInterface;
  _count?: {};
}

export interface PdfGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_path?: string;
  summary_id?: string;
}
