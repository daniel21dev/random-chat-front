import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context'

const httpLink =  createHttpLink({
    uri: process.env.REACT_APP_API_URL,
    fetch
});

const authLink = setContext((_,{ headers }) =>{

    // read storage
    const token = localStorage.getItem('token');

    return{
        headers: {
            ...headers,
            token: token ? `${ token }` : ''
        }
    }
})

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat( httpLink )
});

export default client;