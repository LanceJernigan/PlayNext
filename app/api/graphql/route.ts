import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import type { NextRequest } from "next/server";
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
        user(steamId: String!): User
        library(steamId: String!): [Game]
        suggestions: [Category]
    }
`;


const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    // Context receives only `req` (per the lib’s API)
    context: async (req) => ({ req }),
});

// Export GET/POST wrappers that accept the Next.js 2nd arg.
// On Next 15, `params` is often a Promise — type it accordingly.
export async function GET(req: NextRequest, _ctx: { params: Promise<Record<string, string>> }) {
    return handler(req);
}

export async function POST(req: NextRequest, _ctx: { params: Promise<Record<string, string>> }) {
    return handler(req);
}