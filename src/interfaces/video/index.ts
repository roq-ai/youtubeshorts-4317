import { SummaryInterface } from 'interfaces/summary';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  youtube_link: string;
  transcript: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  summary?: SummaryInterface[];
  user?: UserInterface;
  _count?: {
    summary?: number;
  };
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  youtube_link?: string;
  transcript?: string;
  user_id?: string;
}
