import Image from 'next/image';
import styles from "./profileOverview.module.css";

export default function ProfileOverview() {
    return (
        <section className={styles.wrapper}>
            <Image
                src="https://avatars.steamstatic.com/78f380d0026bd5f52b2082f50197b8a5e1420c35_full.jpg"
                alt="defiantMonkey profile image"
                width={75}
                height={75}
                className={styles.image}
            />
            <h3 className={styles.username}>defiantMonkey</h3>
        </section>
    )
}