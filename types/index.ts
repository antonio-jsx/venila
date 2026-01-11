export const DAYS = ['L', 'M', 'MI', 'J', 'V', 'S', 'D'] as const;

export type Day = (typeof DAYS)[number];
