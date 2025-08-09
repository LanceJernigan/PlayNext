import { gql } from "@apollo/client";

export default gql`
    query User {
        library {
            appid
            has_community_visible_stats
            has_leaderboards
            img_icon_url
            name
            playtime_deck_forever
            playtime_disconnected
            playtime_forever
            playtime_linux_forever
            playtime_mac_forever
            playtime_windows_forever
            rtime_last_played
        }
    }
`