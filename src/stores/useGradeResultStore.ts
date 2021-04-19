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
  isChecking: boolean;
  setIsChecking: (v: boolean) => void;

  issues: Array<Issue>;
  clearIssues: () => void;
  setIssues: (issues: Array<Issue>) => void;
  bands: Bands;
  setBands: (bands: Bands) => void;
}

export const useGraderResultStore = create<GradeResultStore>(set => ({
  isChecking: true,
  issues: [],
  clearIssues: () => set({ issues: [] }),
  setIssues: (issues: Array<Issue>) => set({ issues: issues }),
  bands: { ta: 0, cc: 0, lr: 0, gr: 0, overall: 0 },
  setBands: (bands: Bands) => set({ bands: bands }),
  setIsChecking: (v: boolean) => set({ isChecking: v })
}));
