import { gql } from "@apollo/client";

export default gql`
    query Suggestions {
        suggestions {
            games {
                appid
                description
                image
                name
            }
            name
        }
    }
`