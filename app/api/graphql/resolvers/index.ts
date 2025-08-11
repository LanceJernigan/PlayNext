import userResolver from "./user";
import libraryResolver from "./library";
import suggestionsResolver from "./suggestions";

const resolvers = {
    Query: {
        user: userResolver,
        library: libraryResolver,
        suggestions: suggestionsResolver,
    }
}

export default resolvers