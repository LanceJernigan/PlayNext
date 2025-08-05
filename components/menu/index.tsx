import Link from "next/link";
import styles from './menu.module.css';

export default function Menu() {
    return (
        <ul className={styles.list}>
            <li>
                <Link href="/account/library/">Library</Link>
            </li>
            <li>
                <Link href="/account/suggestions/">Suggestions</Link>
            </li>
            <li>
                <Link href="/account/profile/">Profile</Link>
            </li>
        </ul>
    )
}