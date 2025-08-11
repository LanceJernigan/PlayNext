export type Suggestion = {
    name: string;
    appid: number;
    image: string;
    description: string;
}

export type Category = {
    name: string;
    games: Suggestion[];
}