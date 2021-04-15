import create, { State } from 'zustand';

interface PaperStoreProps extends State {
  question: string;
  setQuestion: (q: string) => void;
  body: string;
  setBody: (b: string) => void;
}

export const usePaperStore = create<PaperStoreProps>(set => ({
  question: '',
  body: '',
  setQuestion: (q: string) => set({ question: q }),
  setBody: (b: string) => set({ body: b })
}));
