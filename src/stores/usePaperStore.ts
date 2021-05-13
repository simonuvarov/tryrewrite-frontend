import create, { State } from 'zustand';

interface PaperStoreProps extends State {
  paper: { question: string; body: string };
  setPaper: (paper: { question: string; body: string }) => void;
  isFetching: boolean;
  setIsFetching: (value: boolean) => void;
}

export const usePaperStore = create<PaperStoreProps>(set => ({
  paper: { question: '', body: '' },
  setPaper: (paper: { question: string; body: string }) =>
    set({ paper: paper }),
  isFetching: true,
  setIsFetching: (value: boolean) => set({ isFetching: value })
}));
