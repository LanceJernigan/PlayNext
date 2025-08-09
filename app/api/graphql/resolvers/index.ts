import userResolver from "./user";
import libraryResolver from "./library";

const resolvers = {
    Query: {
        user: userResolver,
        library: libraryResolver,
    }
}

export default resolvers