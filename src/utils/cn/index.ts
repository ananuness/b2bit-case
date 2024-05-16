import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * `cn` is the association of the `twMerge()` and `clsx()`
 * functions, to generate an appropriate className avoiding
 * conflicts.
 * @param inputs classNames and conditions to be applied
 * @returns a new className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
