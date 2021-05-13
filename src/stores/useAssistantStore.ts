import create, { State } from 'zustand';
import { Issue } from '../services/paper.service';

interface Bands {
  ta: number;
  cc: number;
  lr: number;
  gr: number;
  overall: number;
}

interface AssistantStoreProps extends State {
  isShowing: boolean;
  toggleShowing: () => void;
  selected?: string;
  select: (id: string) => void;
  issues: Array<Issue>;
  setIssues: (issues: Array<Issue>) => void;
  bands: Bands;
  setBands: (bands: Bands) => void;
  isResultFetching: boolean;
  setIsResultFetching: (value: boolean) => void;
  hide: () => void;
}

export const useAssistantStore = create<AssistantStoreProps>((set, get) => ({
  isShowing: false,
  selected: undefined,
  toggleShowing: () => set({ isShowing: !get().isShowing }),
  select: (id: string) => set({ selected: id }),
  issues: [],
  setIssues: (issues: Array<Issue>) => set({ issues: issues }),
  bands: {
    ta: 0,
    cc: 0,
    lr: 0,
    gr: 0,
    overall: 0
  },
  setBands: (bands: Bands) => set({ bands: bands }),
  isResultFetching: true,
  setIsResultFetching: (value: boolean) => set({ isResultFetching: value }),
  hide: () => set({ isShowing: false })
}));
