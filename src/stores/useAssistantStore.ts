import create, { State } from 'zustand';

interface AssistantStoreProps extends State {
  isShowing: boolean;
  toggleShowing: () => void;
  selected: string | null;
  select: (id: string) => void;
}

export const useAssistantStore = create<AssistantStoreProps>((set, get) => ({
  isShowing: false,
  selected: null,
  toggleShowing: () => set({ isShowing: !get().isShowing }),
  select: (id: string) => set({ selected: id })
}));
