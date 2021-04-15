import create, { State } from 'zustand';
import { Issue } from '../services/paper.service';

interface IssueStoreProps extends State {
  issues: Array<Issue>;
  clearIssues: () => void;
  setIssues: (issues: Array<Issue>) => void;
}

export const useIssuesStore = create<IssueStoreProps>(set => ({
  issues: [],
  clearIssues: () => set({ issues: [] }),
  setIssues: (issues: Array<Issue>) => set({ issues: issues })
}));
