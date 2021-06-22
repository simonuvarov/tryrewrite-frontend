import axios from 'axios';

export interface InlineIssue {
  id: string;
  message: string;
  shortMessage: string;
  offset: number;
  length: number;
  replacements?: Array<string>;
  affects: CRITERIA_TYPE;
  isInline: true;
  link?: string;
}

export interface NotInlineIssue {
  id: string;
  message: string;
  shortMessage: string;
  affects: CRITERIA_TYPE;
  isInline: false;
  link?: string;
}

export type Issue = InlineIssue | NotInlineIssue;

export interface Paper {
  id: string;
  question: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  overallBand: number;
  taBand: number;
  ccBand: number;
  lrBand: number;
  grBand: number;
  authorId: string;
}

export enum CRITERIA_TYPE {
  TA = 'Task Achievement',
  CC = 'Coherence and Cohesion',
  GR = 'Grammatical Range and Accuracy',
  LR = 'Lexical Resource'
}

const getPaper = (id: string) => {
  return axios.get<Paper>(`/api/papers/${id}`);
};

const getAllPapers = (): Promise<Array<Paper>> => {
  return new Promise((resolve, reject) => {
    return axios
      .get<Array<Paper>>(`/api/papers`)
      .then(res => resolve(res.data))
      .catch(reject);
  });
};

const createNewPaper = (paper?: Partial<Paper>) => {
  return axios.post<Paper>(`/api/papers`, paper || {});
};

const gradePaper = (id: string, input: { question: string; body: string }) => {
  return axios.put<{
    issues: Array<Issue>;
    bands: { ta: number; cc: number; lr: number; gr: number; overall: number };
  }>(`/api/papers/${id}`, {
    question: input.question,
    body: input.body
  });
};

export default { createNewPaper, getPaper, getAllPapers, gradePaper };
