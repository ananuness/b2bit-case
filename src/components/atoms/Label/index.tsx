import { ComponentProps } from 'react';

interface LabelProps extends ComponentProps<'label'> {
  /**
   * Label element title.
   *
   * i.e. the content that the element will receive.
   */
  title: string;
}

export function Label({ title, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className="text-lg text-neutral-800 font-sans font-bold tracking-[3%]"
    >
      {title}
    </label>
  );
}
