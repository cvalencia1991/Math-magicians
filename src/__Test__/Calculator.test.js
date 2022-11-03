import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Testing Calculator component', () => {
  test('renders correctly', () => {
    render(<Calculator />);
    const display = document.querySelector('.styleoutput');
    const btn = screen.getByText('1');
    fireEvent.click(btn);
    expect(display.textContent).toBe('1');

    // render(<Calculator />);
    // const resultNumber = document.querySelector('.styleoutput');
    // const key5 = screen.getByText('5');
    // const key4 = screen.getByText('4');
    // fireEvent.click(key5);
    // fireEvent.click(key4);
    // expect(resultNumber.textContent).toBe('54');
  });

});

// render(<Calculator />);
// const resultNumber = document.querySelector('.styleoutput');
// const key5 = screen.getByText('5');
// const key4 = screen.getByText('4');
// fireEvent.click(key5);
// fireEvent.click(key4);
// expect(resultNumber.textContent).toBe('54');