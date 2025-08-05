import Menu from "@/components/menu";
import ProfileOverview from "@/components/profileOverview";
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <ProfileOverview />
            <Menu />
        </header>
    )
}