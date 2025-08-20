import { gql } from "@apollo/client";

export default gql`
  query User($steamId: String!) {
    user(steamId: $steamId) {
      avatar
      avatarfull
      avatarhash
      avatarmedium
      communityvisibilitystate
      lastlogoff
      personaname
      personastate
      personastateflags
      primaryclanid
      profilestate
      profileurl
      realname
      steamid
      timecreated
    }
  }
`