import userResolver from "./user";

const resolvers = {
    Query: {
        user: userResolver
    }
}

export default resolvers