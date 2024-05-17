/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from 'yup';
import { FormikHelpers } from 'formik';
import { authService } from '@/services/auth';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

const signInSchema = yup.object({
  email: yup
    .string()
    .required('E-mail is required')
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Invalid e-mail'
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must have at least 8 characters'),
});

type SignInData = yup.InferType<typeof signInSchema>;

export function useSignInForm() {
  const { signIn } = useAuth();
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (
    values: SignInData,
    actions: FormikHelpers<SignInData>
  ) => {
    actions.setSubmitting(true);

    try {
      const response = await authService.login(values);

      signIn(response.tokens.access);
      setServerError(null);
    } catch (error: any) {
      if (error.response.status === 500) {
        setServerError('Oops, server issues, please try again later.');
      }
      if (error.response.status === 401) {
        setServerError('Invalid credentials');
      }
    }

    actions.setSubmitting(false);
  };

  return {
    signInSchema,
    serverError,
    handleSubmit,
  };
}
