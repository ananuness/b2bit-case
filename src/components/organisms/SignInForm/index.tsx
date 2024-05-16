import { ErrorMessage, Form, Formik } from 'formik';
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { Button } from '@/components/atoms/Button';
import { useSignInForm } from './useSignInForm';

export function SignInForm() {
  const { signInSchema, handleSubmit } = useSignInForm();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signInSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-96">
          <div className="flex flex-col gap-2">
            <Label title="E-mail" htmlFor="email" />
            <Input id="email" name="email" placeholder="@gmail.com" />
            <ErrorMessage name="email">
              {(msg) => (
                <span className="ml-1 text-sm text-red-700">{msg}</span>
              )}
            </ErrorMessage>
          </div>

          <div className="flex flex-col gap-2 mt-7 mb-9">
            <Label title="Password" htmlFor="password" />
            <Input
              id="password"
              name="password"
              placeholder="••••••••••"
              type="password"
            />
            <ErrorMessage name="password">
              {(msg) => (
                <span className="ml-1 text-sm text-red-700">{msg}</span>
              )}
            </ErrorMessage>
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
