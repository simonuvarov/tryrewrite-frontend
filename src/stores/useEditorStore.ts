import create, { State } from 'zustand';
import { Paper } from '../services/paper.service';

interface Bands {
  ta: number;
  cc: number;
  lr: number;
  gr: number;
  overall: number;
}

type PaperData = Pick<Paper, 'question' | 'body'>;

interface EditorStoreProps extends State {
  isVisible: boolean;
  toggleVisible: () => void;

  hideAssistant: () => void;
}

export const useEditorStore = create<EditorStoreProps>((set, get) => ({
  isVisible: false,
  toggleVisible: () => set({ isVisible: !get().isVisible }),
  hideAssistant: () => set({ isVisible: false })
}));
