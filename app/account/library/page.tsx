"use client";

import { useSuspenseQuery } from "@apollo/client";
import getLibraryQuery from "@/queries/library/getLibrary";
import { Game } from "@/app/api/graphql/resolvers/library/types";
import GamesGrid from "@/components/gamesGrid";
import styles from "./page.module.css";
import { useMemo } from "react";

export default function Library() {
    const { data }: { data: { library: Game[] } } = useSuspenseQuery(getLibraryQuery);
    const games = useMemo(() => {
        return [...(data?.library || [])].sort((a, b) => a.name.localeCompare(b.name));
    }, [data.library]);

    return (
        <div className={styles.wrapper}>
            <GamesGrid title="Library" games={games} className={styles.grid} />
        </div>
    )
}