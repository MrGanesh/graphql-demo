import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import App from './App';
// import {BrowserRouter} from "react-router-dom"


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache
})
root.render(
  <StrictMode>

    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>

  </StrictMode>
);
