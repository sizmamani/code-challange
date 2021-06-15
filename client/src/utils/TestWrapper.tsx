import { render } from '@testing-library/react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import bitTheme from '../theme/bitTheme';
import { GRAPHQL_API_URL } from '../config';

const client = new ApolloClient({
    uri: GRAPHQL_API_URL,
});

function withProvider(ui: any) {
    const Wrapper = (props: any) => (
        <ApolloProvider client={client as any}>
            <ThemeProvider theme={bitTheme}>{props.children}</ThemeProvider>
        </ApolloProvider>
    );
    return {
        ...render(ui, { wrapper: Wrapper }),
    };
}

export * from '@testing-library/react';
export { withProvider };


