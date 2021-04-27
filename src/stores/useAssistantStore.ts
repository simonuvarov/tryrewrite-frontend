import create, { State } from 'zustand';

interface AssistantStoreProps extends State {
  isShowing: boolean;
  toggleShowing: () => void;
  show: () => void;
  hide: () => void;
  selected: string | null;
  select: (id: string) => void;
}

export const useAssistantStore = create<AssistantStoreProps>((set, get) => ({
  isShowing: true,
  selected: null,
  toggleShowing: () => set({ isShowing: !get().isShowing }),
  show: () => set({ isShowing: true }),
  hide: () => set({ isShowing: false }),
  select: (id: string) => set({ selected: id })
}));
