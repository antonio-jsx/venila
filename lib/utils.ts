import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as z from 'zod/v4';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) return '';

  if (words.length === 1) {
    const word = words[0];
    return (word?.substring(0, 2) ?? '').toUpperCase();
  }

  const first = words[0]?.[0] ?? '';
  const second = words[1]?.[0] ?? '';
  return (first + second).toUpperCase();
}

export const requiredString = (message: string = 'Required') =>
  z.string().trim().min(1, message);

export function priceRange(min: number | null, max: number | null) {
  const minAmount = min === 0 ? 'Free' : min;
  if (min === max) return min;
  return `${minAmount} - ${max}`;
}
