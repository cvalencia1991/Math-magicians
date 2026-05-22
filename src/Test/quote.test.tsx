import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Quote from '../Pages/QuotePage';

describe('Testing Quote', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
