import { render, screen } from '@testing-library/react';
import { UserCard } from '.';

const mockAvatar = {
  image_low_url: 'low_res_image.jpg',
  image_medium_url: 'medium_res_image.jpg',
  image_high_url: 'high_res_image.jpg',
};

const userData = {
  name: 'John',
  lastName: 'Doe',
  email: 'john.doe@gmail.com',
  avatar: mockAvatar,
};

const defaultAvatar = '/src/assets/avatar-default.jpg';

describe('UserCard', () => {
  it('should render data properly', () => {
    render(<UserCard {...userData} />);

    const title = screen.getByText(/profile picture/i);
    const picture = screen.getByRole('img');
    const fieldLabels = screen.getAllByRole('presentation');
    const emailField = screen.getByText(userData.email);
    const nameField = screen.getByText(/john doe/i);

    expect(title).toBeInTheDocument();
    expect(picture).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(nameField).toBeInTheDocument();
    expect(fieldLabels).toHaveLength(2);
  });

  it('should render default image for no avatar provided', () => {
    render(<UserCard {...userData} avatar={undefined} />);

    const lowSource = screen.getByTestId('source-low');
    const mediumSource = screen.getByTestId('source-medium');
    const picture = screen.getByRole('img');

    expect(lowSource).toHaveAttribute('srcset', defaultAvatar);
    expect(lowSource).toHaveAttribute('media', '(max-width: 768px)');

    expect(mediumSource).toHaveAttribute('srcset', defaultAvatar);
    expect(mediumSource).toHaveAttribute('media', '(max-width: 1280px)');

    expect(picture).toHaveAttribute('src', defaultAvatar);
  });

  it('should render just the first name when no last name provided', () => {
    render(<UserCard {...userData} lastName={undefined} />);

    const nameField = screen.getByText(userData.name);

    expect(nameField).toBeInTheDocument();
  });
});
