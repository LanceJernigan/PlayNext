import GameCard from '@/components/gameCard';
import { Game } from '@/app/api/graphql/resolvers/library/types';
import styles from './gamesRow.module.css';
import { useEffect, useRef, useState } from 'react';

export default function GamesRow({ games, title, className }: { games: Game[]; title?: string, className?: string; }) {
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const scrollerRef = useRef<HTMLUListElement>(null);

    const onKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
        if (!scrollerRef.current) return;
        const node = scrollerRef.current;
        const page = node.clientWidth * 0.9;
        if (e.key === "ArrowRight") {
            node.scrollBy({ left: page, behavior: "smooth" });
            e.preventDefault();
        } else if (e.key === "ArrowLeft") {
            node.scrollBy({ left: -page, behavior: "smooth" });
            e.preventDefault();
        }
    };

    // Measure one column + gap
    function getColMetrics(el: HTMLElement) {
        const firstCol = el.querySelector<HTMLElement>(".game");
        const styles = getComputedStyle(el);
        const gap = parseFloat(styles.columnGap || "0");
        const colWidth = firstCol ? firstCol.getBoundingClientRect().width : 320; // fallback
        return { colWidth, gap, step: colWidth + gap };
    }

    // How many full columns fit in view?
    function colsPerPage(el: HTMLElement) {
        const { step } = getColMetrics(el);
        return Math.max(1, Math.floor((el.clientWidth + 0.1) / step)); // +0.1 avoids rounding glitches
    }

    // Find the column whose left edge is closest to the current scrollLeft
    function nearestColIndex(el: HTMLElement) {
        const cols = Array.from(el.querySelectorAll<HTMLElement>(".game")), left = el.scrollLeft;
        let best = 0, bestDist = Infinity;
        cols.forEach((c, i) => {
            const d = Math.abs(c.offsetLeft - left);
            if (d < bestDist) { bestDist = d; best = i; }
        });
        return best;
    }

    // Scroll by N columns (snaps to the column start)
    function scrollByColumns(el: HTMLElement, dir: -1 | 1, n?: number) {
        const cols = Array.from(el.querySelectorAll<HTMLElement>(".game"));
        if (!cols.length) return;
        const per = n ?? colsPerPage(el);
        const from = nearestColIndex(el);
        const to = Math.max(0, Math.min(cols.length - 1, from + dir * per));
        cols[to].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        const update = () => {
            const { scrollLeft, scrollWidth, clientWidth } = el;
            setAtStart(scrollLeft <= 0);
            setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // -1 to handle float rounding
        };

        update(); // run once on mount
        el.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            el.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <section className={`${styles.wrapper}${!!className ? ` ${className}` : ''}`}>
            {!!title && <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                {/* <h3 className={styles.count}>{games.length}</h3> */}
            </header>}
            <div className={styles.gridWrapper}>
                <button
                    type="button"
                    className={`${styles.button} ${styles.buttonLeft} ${(atStart || !scrollerRef.current) && styles.buttonHidden}`}
                    onClick={() => {
                        const el = scrollerRef.current!;
                        scrollByColumns(el, -1,);
                    }}
                >
                    ◀
                </button>
                <ul className={styles.grid} ref={scrollerRef} onKeyDown={onKeyDown}>
                    {games.map((game, i) => (
                        <li key={game.appid} className={`${styles.game} game`} style={{
                            animationDelay: `${i * 10}ms`
                        }}>
                            <GameCard key={game.appid} {...game} />
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    className={`${styles.button} ${styles.buttonRight} ${(atEnd || !scrollerRef.current) && styles.buttonHidden}`}
                    onClick={() => {
                        const el = scrollerRef.current!;
                        scrollByColumns(el, 1);
                    }}
                >
                    ▶
                </button>
            </div>
        </section>
    )
}