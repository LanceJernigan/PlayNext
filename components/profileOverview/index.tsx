import Image from 'next/image';
import styles from "./profileOverview.module.css";
import { useAppContext } from '@/providers/appContext';

export default function ProfileOverview() {
    const { state } = useAppContext();

    return (
        <section className={styles.wrapper}>
            <Image
                src={state?.user?.avatarfull || ""}
                alt={`${state?.user?.personaname}'s profile image`}
                width={75}
                height={75}
                className={styles.image}
            />
            <h3 className={styles.username}>{state?.user?.personaname}</h3>
        </section>
    )
}