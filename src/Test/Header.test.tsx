import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../shared/Header';

describe('Header Component', () => {
  test('renders the title Math Magicians', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Math Magicians/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Calculator/i)).toBeInTheDocument();
    expect(screen.getByText(/Quote/i)).toBeInTheDocument();
  });

  test('links have correct attributes', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Home/i).closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText(/Calculator/i).closest('a')).toHaveAttribute('href', '/Calculator');
    expect(screen.getByText(/Quote/i).closest('a')).toHaveAttribute('href', '/Quote');
  });
});
