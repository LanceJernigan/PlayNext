import GameCard from '@/components/gameCard';
import { Game } from '@/components/gameCard/types';
import styles from './gamesGrid.module.css';

export default function GamesGrid({ games, title, className }: { games: Game[]; title?: string, className?: string; }) {
    return (
        <section className={`${styles.wrapper}${!!className && ` ${className}`}`}>
            {!!title && <h1 className={styles.title}>{title}</h1>}
            <ul className={styles.grid}>
                {games.map((game) => (
                    <li key={game.appid} className={styles.game}>
                        <GameCard key={game.appid} {...game} />
                    </li>
                ))}
            </ul>
        </section>
    )
}