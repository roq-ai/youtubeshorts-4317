import axios from 'axios';
import queryString from 'query-string';
import { SummaryInterface, SummaryGetQueryInterface } from 'interfaces/summary';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSummaries = async (query?: SummaryGetQueryInterface): Promise<PaginatedInterface<SummaryInterface>> => {
  const response = await axios.get('/api/summaries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSummary = async (summary: SummaryInterface) => {
  const response = await axios.post('/api/summaries', summary);
  return response.data;
};

export const updateSummaryById = async (id: string, summary: SummaryInterface) => {
  const response = await axios.put(`/api/summaries/${id}`, summary);
  return response.data;
};

export const getSummaryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/summaries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSummaryById = async (id: string) => {
  const response = await axios.delete(`/api/summaries/${id}`);
  return response.data;
};
