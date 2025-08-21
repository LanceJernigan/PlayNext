"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { LoginArgs } from './types';

export default function Login({ handleSubmit, handleChange, steamId, user, loading }: LoginArgs) {
    const router = useRouter();

    const handleLocalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleSubmit(steamId);
    }

    const handleLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.value)
    }

    const handleButtonClick = () => {
        if (user) {
            router.push("/account/library");
        }
    }

    return (
        <section className={styles.wrapper} data-hidecontent={!!user || loading}>
            <header className={styles.header}>
                <div className={styles.image}>
                    {user && (
                        <Image
                            src={user?.avatarfull}
                            alt={`${user.personaname}'s profile image`}
                            width={100}
                            height={100}
                            className={styles.image}
                        />
                    )}
                </div>
                <h1>{user ? user.personaname : "PlayNext"}</h1>
            </header>
            <p className={styles.content}>
                Tired of scrolling through endless game lists? Our tool analyzes your gaming library to recommend titles tailored to your tastes. Whether you&apos;re into fast-paced shooters, cozy farming sims, or story-rich adventures — we&apos;ve got the perfect next game for you. Just connect your library and let the discovery begin!
            </p>
            <form className={styles.form} onSubmit={handleLocalSubmit}>
                <label className={`${styles.label} ${(loading || user) && styles.labelLoading}`}>
                    <p>Steam ID or Profile URL</p>
                    <input
                        name="steamId"
                        id="steamId"
                        type="text"
                        value={steamId}
                        onChange={handleLocalChange}
                        className={styles.input}
                    />
                </label>
                <button
                    type="button"
                    onClick={handleButtonClick}
                    className={`${styles.button} ${user ? styles.buttonLoaded : loading ? styles.buttonLoading : styles.buttonHidden}`}
                >
                    <span>{loading ? "Loading" : "Get Started"}</span>
                </button>
            </form>
        </section>
    )
}