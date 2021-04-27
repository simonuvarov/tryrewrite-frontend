import create, { State } from 'zustand';
import { Issue } from '../services/paper.service';

interface Bands {
  ta: number;
  cc: number;
  lr: number;
  gr: number;
  overall: number;
}

interface GradeResultStore extends State {
  issues: Array<Issue> | null;
  setIssues: (issues: Array<Issue> | null) => void;
  bands: Bands | null;
  setBands: (bands: Bands | null) => void;
}

export const useGraderResultStore = create<GradeResultStore>(set => ({
  issues: null,
  setIssues: (issues: Array<Issue> | null) => set({ issues: issues }),
  bands: null,
  setBands: (bands: Bands | null) => set({ bands: bands })
}));
