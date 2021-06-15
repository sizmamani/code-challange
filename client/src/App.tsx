import { Route, Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { TopHeader } from './components/header';
import { BlockDetailPage, BlockListingPage } from './pages';
import bitTheme from './theme/bitTheme';
import { history } from './utils/history';

const App = () => (
  <ThemeProvider theme={bitTheme}>
    <TopHeader />
    <Router history={history}>
      <Switch>
        <Route path='/:hash' component={BlockDetailPage} />
        <Route path='/' component={BlockListingPage} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
