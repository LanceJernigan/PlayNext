import { GetPlayerSummariesResponse, QueryUserArgs, User } from './types';

const userResolver = async (_parent: unknown, args: QueryUserArgs): Promise<User | null> => {
    const { steamId } = args;
    const url = new URL(
        "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/"
    );

    url.searchParams.set("key", process.env.STEAM_API_KEY ?? "");
    url.searchParams.set("steamids", steamId);

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Upstream error: ${res.status} ${res.statusText}`);
    }

    const json: GetPlayerSummariesResponse = await res.json();

    return json.response.players[0] || null;
}

export default userResolver