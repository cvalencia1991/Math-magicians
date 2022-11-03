import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from '../Pages/Home';

describe('Testing Home', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
