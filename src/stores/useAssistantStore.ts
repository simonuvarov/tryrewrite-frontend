import create, { State } from 'zustand';

interface AssistantStoreProps extends State {
  isShowing: boolean;
  toggleShowing: () => void;
  show: () => void;
  hide: () => void;
}

export const useAssistantStore = create<AssistantStoreProps>((set, get) => ({
  isShowing: true,
  toggleShowing: () => set({ isShowing: !get().isShowing }),
  show: () => set({ isShowing: true }),
  hide: () => set({ isShowing: false })
}));
