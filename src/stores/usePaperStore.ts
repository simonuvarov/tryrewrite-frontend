import create, { State } from 'zustand';
import paperService, { Paper } from '../services/paper.service';

type PaperData = Pick<Paper, 'question' | 'body'>;

interface PaperStoreProps extends State {
  paper: PaperData;
  getPaper: (id: string) => void;
  isLoading: boolean;
  setPaper: (paper: PaperData) => void;
}

export const usePaperStore = create<PaperStoreProps>(set => ({
  isLoading: true,
  getPaper: (id: string) => {
    set({ isLoading: true });
    paperService
      .getPaper(id)
      .then(res => set({ paper: res.data }))
      .finally(() => set({ isLoading: false }));
  },
  paper: { question: '', body: '' },
  setPaper: (paper: { question: string; body: string }) => set({ paper: paper })
}));
