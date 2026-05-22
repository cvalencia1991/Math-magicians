import operate from '../lib/operate';

describe('Testing Component Calculate', () => {
  test('sum tow values', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });
  test('rest two values', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });
  test('multiply two values', () => {
    expect(operate(4, 2, '*')).toBe('8');
  });
  test('modulo operation', () => {
    expect(operate(7, 2, '%')).toBe('1');
  });
  test('divide to values', () => {
    const result = "Can't divide by 0.";
    expect(operate(5, 0, '÷')).toBe(result);
  });
  test('modulo by 0', () => {
    expect(operate(7, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
  test('unknown operation throws error', () => {
    expect(() => operate(1, 1, '!')).toThrow("Unknown operation '!'");
  });
});
