"use client";

import { useQuery } from "@apollo/client";
import getLibraryQuery from "@/queries/library/getLibrary";
import { Game } from "@/app/api/graphql/resolvers/library/types";
import GamesGrid from "@/components/gamesGrid";
import styles from "./page.module.css";
import { useMemo } from "react";
import { useAppContext } from "@/providers/appContext";

export default function Library() {
    const { state } = useAppContext();
    const { data } = useQuery(getLibraryQuery, {
        skip: !state?.user?.steamid,
        variables: {
            steamId: state?.user?.steamid
        }
    });
    const games = useMemo(() => {
        return [...(data?.library || [])].sort((a, b) => a.name.localeCompare(b.name));
    }, [data?.library]);

    return (
        <section className={styles.wrapper}>
            <GamesGrid title="Library" games={games} className={styles.grid} />
        </section>
    )
}