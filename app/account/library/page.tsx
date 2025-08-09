"use client";

import { useSuspenseQuery } from "@apollo/client";
import getLibraryQuery from "@/queries/library/getLibrary";
import { Game } from "@/app/api/graphql/resolvers/library/types";
import GamesGrid from "@/components/gamesGrid";
import styles from "./page.module.css";

export default function Library() {
    const { data }: { data: { library: Game[] } } = useSuspenseQuery(getLibraryQuery);

    console.log(data);

    return (
        <div className={styles.wrapper}>
            <GamesGrid title="Library" games={data.library} className={styles.grid} />
        </div>
    )
}