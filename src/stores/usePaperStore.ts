import create, { State } from 'zustand';

interface PaperStoreProps extends State {
  paper: { question: string; body: string } | null;
  setPaper: (paper: { question: string; body: string }) => void;
  undefinePaper: () => void;
}

export const usePaperStore = create<PaperStoreProps>(set => ({
  paper: null,
  undefinePaper: () => set({ paper: null }),
  setPaper: (paper: { question: string; body: string }) => set({ paper: paper })
}));
