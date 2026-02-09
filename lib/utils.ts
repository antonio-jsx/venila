import { type ClassValue, clsx } from 'clsx';
import { parse } from 'date-fns';
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
  if (min === max) return `$${min}`;
  return `$${minAmount} - $${max}`;
}

export function combineDateAndTime(date: string, time: string) {
  return parse(`${date} ${time}`, 'yyyy-MM-dd HH:mm:ss', new Date());
}

export function parseLocalDate(date: string) {
  return parse(date, 'yyyy-MM-dd', new Date());
}

export function parseTime(time: string) {
  const [h, m] = time.split(':').map(Number);
  const isPM = h >= 12;
  const hour12 = h % 12 || 12;

  return `${hour12}:${m.toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
}

export function generateSlug(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function extractIdFromSlug(slug: string): number | null {
  const raw = slug.split('.').pop();
  if (!raw) return null;

  const id = Number(raw);
  return Number.isInteger(id) ? id : null;
}
