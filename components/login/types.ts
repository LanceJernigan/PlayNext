import { User } from "@/app/api/graphql/resolvers/user/types"

export type LoginArgs = {
    handleSubmit: (steamId: string) => void,
    handleChange: (steamId: string) => void,
    steamId: string,
    user: User | null,
    loading: boolean;
}