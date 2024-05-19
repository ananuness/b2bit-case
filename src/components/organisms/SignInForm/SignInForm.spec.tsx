import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignInForm } from '.';

describe('SignInForm', () => {
  it('should render the form properly', () => {
    render(<SignInForm />);

    const form = screen.getByRole('form');

    expect(form).toHaveFormValues({ email: '', password: '' });
  });

  it('should display error messages when user type something wrong', async () => {
    render(<SignInForm />);

    const user = userEvent.setup();

    const emailInput = screen.getByLabelText(/type your e-mail/i);
    const passwordInput = screen.getByLabelText(/type your password/i);

    await user.type(emailInput, 'john-doe.com');
    await user.tab();
    await user.type(passwordInput, '123456');
    await user.tab();

    const errorMessages = await screen.findAllByRole('alert');

    expect(errorMessages).toHaveLength(2);
  });
});
