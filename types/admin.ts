import type { SelectEvents } from '@/lib/db/schemas/events';

export type TitleId = {
  id: number;
  title: string;
};

export interface RemoveStore {
  id: number;
  title: string;
  modal: boolean;
  remove: (options: TitleId) => void;
  closeModal: () => void;
}

export type PermissionConfig = {
  role: 'admin' | 'moderador';
  permissions: Record<string, string[]>;
};

export type EventWithPriceRange = Omit<SelectEvents, 'tickets'> & {
  minPrice: number | null;
  maxPrice: number | null;
  capacity: number | null;
};
