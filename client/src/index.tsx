import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import App from './App';
import './assets/css/reset.css';
import './assets/css/font.css';
import './assets/css/animated.css';
import { GRAPHQL_API_URL } from './config';

const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
});

render(
  <ApolloProvider client={client as any}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
