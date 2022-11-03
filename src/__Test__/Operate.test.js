import calculate from '../logic/calculate';

describe('Operate Component', () => {
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

  describe('testing dot button', () => {
    test('testing number adding dot button ', () => {
      const buttonName = '.0';
      const obj = { total: null, next: '7', operation: null };
      const result = { next: '7.0', total: null };
      expect(calculate(obj, buttonName)).toStrictEqual(result);
    });
    test('testing 0. buttom  ', () => {
      const buttonName = '3';
      const obj = { total: null, next: '5.', operation: null };
      const result = { next: '5.3', total: null };
      expect(calculate(obj, buttonName)).toStrictEqual(result);
    });
  });

  describe('testing = button', () => {
    test('testing = with two numbers  ', () => {
      const buttonName = '=';
      const obj = { total: '7', next: '2', operation: '+' };
      const result = {
        total: '9',
        next: null,
        operation: null,
      };
      expect(calculate(obj, buttonName)).toStrictEqual(result);
    });
  });
  describe('testing +/- button', () => {
    test('testing = with two numbers  ', () => {
      const buttonName = '+/-';
      const obj = { total: null, next: '9' };
      const result = { next: '-9', total: null };
      expect(calculate(obj, buttonName)).toStrictEqual(result);
    });
  });
});
