import Image from "next/image";
import styles from './gameCard.module.css';
import { Game } from './types';

export default function GameCard({
    appid,
    name
}: Game) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image src={`https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`} alt={`${name} thumbnail`} objectFit="cover" fill />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{name}</h2>
            </div>
        </article>
    )
}