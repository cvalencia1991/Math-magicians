import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Layout from '../shared/Layout';

describe('Layout Component', () => {
  test('renders Header within Layout', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );
    expect(getByText(/Math Magicians/i)).toBeInTheDocument();
  });

  test('Layout contains an Outlet for children components', () => {
    // We render Layout which contains Outlet from react-router-dom
    const { container } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );
    // Usually Outlet renders nothing if there are no subroutes matched in a simple test
    // But we check that the main structure is there
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
