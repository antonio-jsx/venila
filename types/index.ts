export const DAYS = ['L', 'M', 'MI', 'J', 'V', 'S', 'D'] as const;

export type Day = (typeof DAYS)[number];

export type Pagination = {
  total: number;
  totalPages: number;
  from: number;
  to: number;
};

export interface Paginated<T> {
  data: T[];
  pagination: Pagination;
}
