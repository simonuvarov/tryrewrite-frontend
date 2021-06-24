import create, { State } from 'zustand';

interface AssistantVisibilityStoreProps extends State {
  isVisible: boolean;
  toggleVisible: () => void;
  hideAssistant: () => void;
}

export const useAssistantVisibilityStore =
  create<AssistantVisibilityStoreProps>((set, get) => ({
    isVisible: false,
    toggleVisible: () => set({ isVisible: !get().isVisible }),
    hideAssistant: () => set({ isVisible: false })
  }));
