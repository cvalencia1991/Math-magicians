import operate from '../logic/operate';

describe('Testing Component Calculate', () => {
  test('sum tow values', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });
  test('rest two values', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });
  test('divide to values', () => {
    const result = "Can't divide by 0.";
    expect(operate(5, 0, '÷')).toBe(result);
  });
  test('rest two values', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });
});
