import { create } from 'zustand';

interface FilterState {
  hideDone: boolean;
  toggleHideDone: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  hideDone: false,
  toggleHideDone: () => set((state) => ({ hideDone: !state.hideDone })),
}));
