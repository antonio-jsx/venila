import type { RemoveStore } from '@/types/admin';
import { create } from 'zustand';

export const useRemove = create<RemoveStore>()((set) => ({
  id: 0,
  title: '',
  modal: false,
  remove: ({ id, title }) => set({ id, title, modal: true }),
  closeModal: () => set({ modal: false }),
}));
