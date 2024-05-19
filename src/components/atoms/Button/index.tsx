import { ComponentProps } from 'react';
import { cn } from '@/utils/cn';
import { Spinner } from '../Spinner';

const buttonSize = {
  md: 'max-w-[272px] p-3 text-base',
  lg: 'max-w-96 p-4 text-lg',
};

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Button element title.
   *
   * i.e. the content that the element will receive.
   */
  title: string;
  /**
   * Optional button size.
   *
   * md = `max-width: 272px`, `padding: 14px`, `font-size: 16px`
   *
   * lg = `max-width: 384px`, `padding: 16px`, `font-size: 18px`
   *
   * If not informed, the default value is `md`.
   */
  size?: keyof typeof buttonSize;
  /** If true, the button will be in its loading mode. */
  isLoading?: boolean;
  /** Class names for additional style. */
  className?: string;
}

export function Button({
  type,
  title,
  size,
  isLoading,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type ?? 'button'}
      aria-label={isLoading ? 'Loading' : title}
      disabled={isLoading}
      className={cn(
        'flex justify-center items-center w-full rounded-lg border-none transition-all duration-300 font-bold text-lg text-zinc-50 bg-blue-900 hover:bg-blue-900/90',
        size ? buttonSize[size] : buttonSize.md,
        isLoading && 'bg-zinc-200 hover:bg-zinc-200 cursor-default',
        className
      )}
    >
      {!isLoading && title}
      {isLoading && <Spinner className={cn(size !== 'lg' && 'w-6 h-6')} />}
    </button>
  );
}
