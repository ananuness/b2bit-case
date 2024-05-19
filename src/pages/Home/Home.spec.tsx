import { Mock, vi } from 'vitest';
import { useAuth } from '@/hooks/useAuth';
import { useProfileDetails } from '@/hooks/useProfileDetails';
import { render, screen } from '@testing-library/react';
import { Home } from '.';

vi.mock('@/hooks/useAuth');
vi.mock('@/hooks/useProfileDetails');

const useAuthMock = useAuth as Mock;
const useProfileDetailsMock = useProfileDetails as Mock;

const mockAvatar = {
  image_low_url: 'low_res_image.jpg',
  image_medium_url: 'medium_res_image.jpg',
  image_high_url: 'high_res_image.jpg',
};

const userProfile = {
  name: 'John',
  last_name: 'Doe',
  email: 'john.doe@gmail.com',
  avatar: mockAvatar,
};

describe('Home', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render Home content when not loading', async () => {
    useAuthMock.mockReturnValue({ signOut: () => 'logged out' });
    useProfileDetailsMock.mockReturnValue({ userProfile, loading: false });

    render(<Home />);

    const button = screen.getByRole('button', { name: /logout/i });
    const picture = screen.getByRole('img');
    const name = screen.getByText(/john doe/i);
    const email = screen.getByText(userProfile.email);

    expect(button).toBeInTheDocument();
    expect(picture).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
