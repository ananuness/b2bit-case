import { render, screen } from '@testing-library/react';
import { Input } from '.';
import { Formik } from 'formik';

describe('Input', () => {
  it('should render properly', () => {
    render(
      <Formik initialValues={{ email: '' }} onSubmit={() => {}}>
        <Input name="email" />
      </Formik>
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });
});
