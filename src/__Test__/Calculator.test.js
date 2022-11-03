import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Testing Calculator component', () => {
  test('sum works correctly', () => {
    render(<Calculator />);
    const display = document.querySelector('.styleoutput');
    const key1 = screen.getByText('1');
    const key2 = screen.getByText('+');
    const key3 = screen.getByText('2');
    const key4 = screen.getByText('=');

    fireEvent.click(key1);
    fireEvent.click(key2);
    fireEvent.click(key3);
    fireEvent.click(key4);

    expect(display.textContent).toBe('3');
  });

});