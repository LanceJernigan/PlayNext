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

    type Game {
        appid: Int
        name: String
        playtime_forever: Int
        img_icon_url: String
        has_community_visible_stats: Boolean
        playtime_windows_forever: Int
        playtime_mac_forever: Int
        playtime_linux_forever: Int
        playtime_deck_forever: Int
        rtime_last_played: Int
        has_leaderboards: Boolean
        playtime_disconnected: Int
    }

    type Suggestion {
        name: String
        appid: Int
        image: String
        description: String
    }

    type Category {
        name: String
        games: [Suggestion]
    }

    type Query {
        user: User
        library: [Game]
        suggestions: [Category]
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