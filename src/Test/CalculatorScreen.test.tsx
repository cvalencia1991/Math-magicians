import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Calculatorscren from '../Pages/CalculatorPage';

describe('Testing Calculator page', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Calculatorscren />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
