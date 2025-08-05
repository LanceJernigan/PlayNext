import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import resolvers from './resolvers';

const typeDefs = gql`
    type User {
        steamid: String
        communityvisibilitystate: Int
        profilestate: Int
        personaname: String
        profileurl: String
        avatar: String
        avatarmedium: String
        avatarfull: String
        avatarhash: String
        lastlogoff: Int
        personastate: Int
        realname: String
        primaryclanid: String
        timecreated: Int
        personastateflags: Int
    }

    type Query {
        user: User
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };