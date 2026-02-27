import type { MPStore } from '@/types/admin';
import { create } from 'zustand';

export const useMP = create<MPStore>()((set) => ({
  modal: false,
  openModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),
}));
