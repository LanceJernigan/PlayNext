export type Game = {
    appid: number,
    name: string,
    playtime_forever: number,
    img_icon_url: string,
    playtime_windows_forever: number,
    playtime_mac_forever: number,
    playtime_linux_forever: number,
    playtime_deck_forever: number,
    rtime_last_played: number,
    playtime_disconnected: number,
    has_community_visible_stats?: boolean,
    content_descriptorids?: number[],
    playtime_2weeks?: number,
    has_leaderboards?: boolean,
}

export type GetOwnedGamesResponse = {
    response: {
        game_count: number;
        games: Game[];
    }
}

export type QueryLibraryArgs = {
    steamId: string;
}