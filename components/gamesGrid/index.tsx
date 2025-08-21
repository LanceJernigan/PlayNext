import GameCard from '@/components/gameCard';
import { Game } from "@/app/api/graphql/resolvers/library/types";
import styles from './gamesGrid.module.css';

export default function GamesGrid({ games, title, className }: { games: Game[]; title?: string, className?: string; }) {
    return (
        <section className={`${styles.wrapper}${!!className ? ` ${className}` : ''}`}>
            {!!title && <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                {/* <h3 className={styles.count}>{games.length}</h3> */}
            </header>}
            <ul className={styles.grid}>
                {games.map((game, i) => (
                    <li key={game.appid} className={styles.game} style={{
                        animationDelay: `${i * 10}ms`
                    }}>
                        <GameCard key={game.appid} {...game} />
                    </li>
                ))}
            </ul>
        </section>
    )
}