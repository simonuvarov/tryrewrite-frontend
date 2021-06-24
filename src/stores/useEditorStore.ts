import create, { State } from 'zustand';
import paperService, { Issue, Paper } from '../services/paper.service';

interface Bands {
  ta: number;
  cc: number;
  lr: number;
  gr: number;
  overall: number;
}

type PaperData = Pick<Paper, 'question' | 'body'>;

interface EditorStoreProps extends State {
  paper: PaperData;
  getPaper: (id: string) => void;
  loading: boolean;
  setPaper: (paper: PaperData) => void;
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

export const useEditorStore = create<EditorStoreProps>((set, get) => ({
  loading: true,
  paper: { question: '', body: '' },

  getPaper: (id: string) => {
    set({ loading: true });
    paperService
      .getPaper(id)
      .then(res => set({ paper: res.data }))
      .finally(() => set({ loading: false }));
  },
  setPaper: (paper: { question: string; body: string }) =>
    set({ paper: paper }),
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
