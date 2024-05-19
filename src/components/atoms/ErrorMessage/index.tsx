import { cn } from '@/utils/cn';

interface ErrorMessageProps {
  /** The element content. */
  message: string;
  /** Class names for additional style. */
  className?: string;
}

export function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <span role="alert" className={cn('text-sm text-red-700', className)}>
      {message}
    </span>
  );
}
