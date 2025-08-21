import { Game, QueryLibraryArgs, GetOwnedGamesResponse } from "./types"

const libraryResolver = async (_parent: unknown, args: QueryLibraryArgs): Promise<Game[] | []> => {
    const { steamId } = args;
    const url = new URL(
        "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/"
    );

    url.searchParams.set("key", process.env.STEAM_API_KEY ?? "");
    url.searchParams.set("steamid", steamId);
    url.searchParams.set("format", "json");
    url.searchParams.set("include_appinfo", "true");

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Upstream error: ${res.status} ${res.statusText}`);
    }

    const json: GetOwnedGamesResponse = await res.json();

    return json.response.games || [];
}

export default libraryResolver