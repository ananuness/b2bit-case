/* eslint-disable react/jsx-key */
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it.each([
    ['Medium', <Button title="Sign In" />],
    ['Large', <Button title="Sign In" size="lg" />],
  ])('should render %s variant properly', (_, element) => {
    render(element);

    const button = screen.getByRole('button', { name: element.props.title });

    expect(button).toBeInTheDocument();
  });

  it('should render the loading mode correctly', () => {
    render(<Button title="Sign In" isLoading />);

    const spinner = screen.getByRole('status');
    const button = screen.getByRole('button');

    expect(button).toContainElement(spinner);
    expect(button).toHaveAttribute('aria-label', 'Loading');
    expect(button).toHaveAttribute('disabled', '');
  });
});
