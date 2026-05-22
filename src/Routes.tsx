import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CalculatorPage from './Pages/CalculatorPage';
import QuotePage from './Pages/QuotePage';
import Layout from './shared/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/Calculator',
        element: <CalculatorPage />,
      },
      {
        path: '/Quote',
        element: <QuotePage />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
