import { ComponentProps } from 'react';
import { Field } from 'formik';

interface InputProps extends ComponentProps<'input'> {
  /** Name of the input element. */
  name: string;
}

/**
 * @requires Formik context
 * @see [formik.org](https://formik.org/docs/api/formik)
 */
export function Input({ name, placeholder, ...props }: InputProps) {
  return (
    <Field
      {...props}
      name={name}
      placeholder={placeholder}
      className="p-[18px] rounded-lg border border-transparent font-sans text-base text-neutral-800 bg-zinc-100 placeholder:text-zinc-500 focus:border-neutral-800 focus-visible:outline-none"
    />
  );
}
