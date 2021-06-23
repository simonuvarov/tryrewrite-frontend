import create, { State } from 'zustand';
import paperService, { Paper } from '../services/paper.service';

type PaperData = Pick<Paper, 'question' | 'body'>;

interface PaperStoreProps extends State {
  paper: PaperData;
  getPaper: (id: string) => void;
  loading: boolean;
  setPaper: (paper: PaperData) => void;
}

export const usePaperStore = create<PaperStoreProps>(set => ({
  loading: true,
  paper: { question: '', body: '' },

  getPaper: (id: string) => {
    set({ loading: true });
    paperService
      .getPaper(id)
      .then(res => set({ paper: res.data }))
      .finally(() => set({ loading: false }));
  },
  setPaper: (paper: { question: string; body: string }) => set({ paper: paper })
}));
