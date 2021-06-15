import App from './App';
import { withProvider } from './utils/TestWrapper';

it('Should render withProvider and match the snapshot', () => {
  const {
    container: { firstChild },
  } = withProvider(<App />);
  expect(firstChild).toMatchSnapshot();
});
