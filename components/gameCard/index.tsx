import Image from "next/image";
import { Game } from "@/app/api/graphql/resolvers/library/types";
import styles from './gameCard.module.css';
import { GameCardArgs } from './types';

export default function GameCard({
    appid,
    name,
    description,
}: Game & GameCardArgs) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={`https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`}
                    alt={`${name} thumbnail`}
                    sizes="300px"
                    fill
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{name}</h2>
                {!!description && <p className={styles.description}>{description}</p>}
            </div>
        </article>
    )
}