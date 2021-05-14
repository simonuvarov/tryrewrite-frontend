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
  isVisible: boolean;
  toggleVisible: () => void;
  selected?: string;
  select: (id: string) => void;
  issues: Array<Issue>;
  setIssues: (issues: Array<Issue>) => void;
  bands: Bands;
  setBands: (bands: Bands) => void;
  isChecking: boolean;
  setChecking: (value: boolean) => void;
  hideAssistant: () => void;
}

export const useAssistantStore = create<AssistantStoreProps>((set, get) => ({
  isVisible: false,
  selected: undefined,
  toggleVisible: () => set({ isVisible: !get().isVisible }),
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
  isChecking: true,
  setChecking: (value: boolean) => set({ isChecking: value }),
  hideAssistant: () => set({ isVisible: false })
}));
