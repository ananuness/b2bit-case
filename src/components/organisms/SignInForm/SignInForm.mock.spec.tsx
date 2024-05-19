import { vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useLocation } from 'react-router-dom';
import { useSignInForm } from '@/hooks/useSignInForm';
import { SignInForm } from '.';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useLocation: vi.fn(() => ({ state: null })),
  };
});

vi.mock('@/hooks/useSignInForm');

const useLocationMock = useLocation as Mock;
const useSignInFormMock = useSignInForm as Mock;

describe('SignInForm with mocks', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should submit the form without errors', async () => {
    const handleSubmit = vi.fn();

    useSignInFormMock.mockReturnValue({ handleSubmit });

    render(<SignInForm />);

    const user = userEvent.setup();

    const emailInput = screen.getByLabelText(/type your e-mail/i);
    const passwordInput = screen.getByLabelText(/type your password/i);
    const button = screen.getByRole('button', { name: /sign in/i });

    await user.type(emailInput, 'john-doe@gmail.com');
    await user.tab();
    await user.type(passwordInput, '12345678');
    await user.tab();
    await user.click(button);

    expect(useSignInForm).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        email: 'john-doe@gmail.com',
        password: '12345678',
      },
      expect.anything()
    );
  });

  it('should show a server error message when it occurs from server', async () => {
    const serverError = 'Internal Server error';

    useSignInFormMock.mockReturnValue({ serverError });

    render(<SignInForm />);

    const errorMessage = screen.getByRole('alert');

    expect(useSignInForm).toHaveBeenCalledTimes(1);
    expect(errorMessage).toHaveTextContent(serverError);
  });

  it('should show a server error message when it occurs from route state', async () => {
    const state = 'Session expired';

    useLocationMock.mockReturnValue({ state });
    useSignInFormMock.mockReturnValue({ serverError: null });

    render(<SignInForm />);

    const errorMessage = screen.getByRole('alert');

    expect(useSignInForm).toHaveBeenCalledTimes(1);
    expect(errorMessage).toHaveTextContent(state);
  });
});
