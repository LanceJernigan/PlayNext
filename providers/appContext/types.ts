import { User } from "@/app/api/graphql/resolvers/user/types";

export type State = {
    user: User | null
};

export type Actions = {
    setUser?: (user: User) => void
}