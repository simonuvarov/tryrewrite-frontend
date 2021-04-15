import create, { State } from 'zustand';

interface Bands {
  ta: number;
  cc: number;
  lr: number;
  gr: number;
  overall: number;
}

interface BandsStoreProps extends State {
  bands: Bands;
  setBands: (bands: Bands) => void;
}

export const useBandsStore = create<BandsStoreProps>(set => ({
  bands: { ta: 0, cc: 0, lr: 0, gr: 0, overall: 0 },
  setBands: (bands: Bands) => set({ bands: bands })
}));
