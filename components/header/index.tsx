import Menu from "@/components/menu";
import ProfileOverview from "@/components/profileOverview";
import styles from './header.module.css';
import MenuIcon from "@/icons/menu";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header
            className={styles.header}
            data-menuopen={menuOpen}
        >
            <div className={styles.top}>
                <ProfileOverview />
                <button
                    className={styles.menuButton}
                    onClick={toggleMenu}
                >
                    <MenuIcon />
                </button>
            </div>
            <div className={styles.menuWrapper}>
                <Menu />
            </div>
        </header>
    )
}