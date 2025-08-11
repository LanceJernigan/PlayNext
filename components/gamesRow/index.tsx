import GameCard from '@/components/gameCard';
import { Game } from '@/components/gameCard/types';
import styles from './gamesRow.module.css';

export default function GamesRow({ games, title, className }: { games: Game[]; title?: string, className?: string; }) {
    return (
        <section className={`${styles.wrapper}${!!className ? ` ${className}` : ''}`}>
            {!!title && <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                {/* <h3 className={styles.count}>{games.length}</h3> */}
            </header>}
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