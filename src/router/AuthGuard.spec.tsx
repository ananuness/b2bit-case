import { Mock, vi } from 'vitest';
import { useAuth } from '@/hooks/useAuth';
import { AuthGuard } from './AuthGuard';
import { Navigate, Outlet } from 'react-router-dom';
import { render } from '@testing-library/react';

vi.mock('react-router-dom', async () => ({
  Navigate: vi.fn(),
  Outlet: vi.fn(),
}));

vi.mock('@/hooks/useAuth', async () => ({
  useAuth: vi.fn(() => ({ signedIn: false })),
}));

const useAuthMock = useAuth as Mock;

describe('AuthGuard', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should redirect to the Sign In page when user is not authenticated', () => {
    render(<AuthGuard isPrivate={true} />);

    expect(useAuth).toHaveBeenCalledTimes(1);
    expect(Navigate).toHaveBeenCalledTimes(1);
    expect(Navigate).toHaveBeenCalledWith({ to: '/signin', replace: true }, {});
  });

  it('should redirect to the Home page when authenticated user tries to access a public route', () => {
    useAuthMock.mockReturnValue({ signedIn: true });

    render(<AuthGuard isPrivate={false} />);

    expect(useAuth).toHaveBeenCalledTimes(1);
    expect(Navigate).toHaveBeenCalledTimes(1);
    expect(Navigate).toHaveBeenCalledWith({ to: '/', replace: true }, {});
  });

  it('should return a page when user access the route they have authorization', () => {
    render(<AuthGuard isPrivate={false} />);

    expect(useAuth).toHaveBeenCalledTimes(1);
    expect(Navigate).not.toHaveBeenCalled();
    expect(Outlet).toHaveBeenCalledTimes(1);
  });
});
