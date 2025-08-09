import { gql } from "@apollo/client";

export default gql`
  query User {
    user {
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