"use client";

import { useSuspenseQuery } from "@apollo/client";
import getSuggestionsQuery from "@/queries/suggestions/getSuggestions";
import { Category } from "@/app/api/graphql/resolvers/suggestions/types";
import styles from './suggestions.module.css';
import GamesRow from "@/components/gamesRow";

export default function Suggestions() {
    const { data }: { data: { suggestions: Category[] } } = useSuspenseQuery(getSuggestionsQuery);

    return (
        <section className={styles.wrapper}>
            <ul className={styles.categories}>
                {data.suggestions.map((category) => (
                    <li className={styles.category} key={category.name}>
                        <GamesRow games={category.games} title={category.name} />
                    </li>
                ))}
            </ul>
        </section>
    )
}