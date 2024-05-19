import { ErrorMessage as FormikMessage, Form, Formik } from 'formik';
import { useSignInForm } from '@/hooks/useSignInForm';
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { Button } from '@/components/atoms/Button';
import { ErrorMessage } from '@/components/atoms/ErrorMessage';

export function SignInForm() {
  const { signInSchema, serverError, handleSubmit } = useSignInForm();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signInSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      {({ isSubmitting }) => (
        <Form aria-label="form" className="w-full max-w-96">
          {serverError && (
            <ErrorMessage
              message={serverError}
              className="block text-base text-center mb-2 text-red-700"
            />
          )}

          <div className="flex flex-col gap-2">
            <Label title="E-mail" htmlFor="email" />
            <Input
              id="email"
              name="email"
              placeholder="@gmail.com"
              aria-label="type your e-mail"
            />
            <FormikMessage
              name="email"
              render={(msg) => <ErrorMessage message={msg} className="ml-1" />}
            />
          </div>

          <div className="flex flex-col gap-2 mt-7 mb-9">
            <Label title="Password" htmlFor="password" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••••"
              aria-label="type your password"
            />
            <FormikMessage
              name="password"
              render={(msg) => <ErrorMessage message={msg} className="ml-1" />}
            />
          </div>

          <Button
            title="Sign In"
            size="lg"
            type="submit"
            isLoading={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}
