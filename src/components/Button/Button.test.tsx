import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  it('renders button with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-md');
    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('py-2');
  });

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    const button = screen.getByText('Click me');
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('applies secondary background color when specified', () => {
    render(<Button bgColor="secondary">Click me</Button>);
    const button = screen.getByText('Click me');

    expect(button).toHaveClass('bg-indigo-600');
    expect(button).toHaveClass('hover:bg-indigo-500');
  });

  it('applies transparent background color when specified', () => {
    render(<Button bgColor="transparent">Click me</Button>);
    const button = screen.getByText('Click me');

    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('text-indigo-600');
    expect(button).toHaveClass('hover:text-indigo-500');
  });
});
