"use client";

import { useQuery } from "@apollo/client";
import getSuggestionsQuery from "@/queries/suggestions/getSuggestions";
import { Category } from "@/app/api/graphql/resolvers/suggestions/types";
import styles from './suggestions.module.css';
import GamesRow from "@/components/gamesRow";
import { useAppContext } from "@/providers/appContext";

export default function Suggestions() {
    const { state } = useAppContext();
    const { data } = useQuery(getSuggestionsQuery, {
        skip: !state?.user?.steamid,
    });

    return (
        <section className={styles.wrapper}>
            <ul className={styles.categories}>
                {data?.suggestions.map((category: Category) => (
                    <li className={styles.category} key={category.name}>
                        <GamesRow games={category.games} title={category.name} />
                    </li>
                ))}
            </ul>
        </section>
    )
}