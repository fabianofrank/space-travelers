import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
import Missions from '../components/missions';
// import store from '../redux/configureStore';

test('renders Missions component', () => {
  const tree = render(<div><Missions /></div>);
  expect(tree).toMatchSnapshot();
});
