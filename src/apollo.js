import ApolloClient from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://yts-proxy.now.sh/list_movies.json',
});

export default client;