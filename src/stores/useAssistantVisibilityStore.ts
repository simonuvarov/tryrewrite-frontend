import create from 'zustand'

interface AssistantVisibilityStoreProps {
  isVisible: boolean
  toggleVisible: () => void
  hideAssistant: () => void
}

export const useAssistantVisibilityStore =
  create<AssistantVisibilityStoreProps>((set, get) => ({
    isVisible: false,
    toggleVisible: () => set((state) => ({ isVisible: !state.isVisible })),
    hideAssistant: () => set({ isVisible: false })
  }))
