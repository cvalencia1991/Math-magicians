import operate from '../logic/operate';
import calculate from '../logic/calculate';

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

describe('Calculate Component', () => {
  test('button AC pressed', () => {
    const Buttonname = 'AC';
    const obj = {
      total: 10,
      next: 1,
      operation: '+',
    };
    const result = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, Buttonname)).toStrictEqual(result);
  });

  describe('testing zero Button', () => {
    test('testing zero button  ', () => {
      const buttonName = '0';
      const obj = { total: 0, next: null, operation: null };
      const result = { next: '0', total: null };
      expect(calculate(obj, buttonName)).toStrictEqual(result);
    });
    test('Adding two values  ', () => {
      const buttonName = '3';
      const obj = { total: null, next: '0', operation: null };
      const result = { next: '3', total: null };
      expect(calculate(obj, buttonName)).toStrictEqual(result);
    });
  });
});
