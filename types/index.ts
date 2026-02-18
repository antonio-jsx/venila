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
