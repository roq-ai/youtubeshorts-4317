import { PdfInterface } from 'interfaces/pdf';
import { VideoInterface } from 'interfaces/video';
import { GetQueryInterface } from 'interfaces';

export interface SummaryInterface {
  id?: string;
  content: string;
  video_id: string;
  created_at?: any;
  updated_at?: any;
  pdf?: PdfInterface[];
  video?: VideoInterface;
  _count?: {
    pdf?: number;
  };
}

export interface SummaryGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  video_id?: string;
}
