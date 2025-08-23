"use client";

import { HttpLink } from "@apollo/client";
import {
    ApolloNextAppProvider,
    ApolloClient,
    InMemoryCache,
} from "@apollo/client-integration-nextjs";

function makeClient() {
    const httpLink = new HttpLink({
        uri: "http://192.168.1.77:3000//api/graphql",
        fetchOptions: {},
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink,
    });
}

export default function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}