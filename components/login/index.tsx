"use client";

import Image from 'next/image';
import { useState } from 'react';
import styles from './login.module.css';
import { Form } from './types';

export default function Login({ handleSubmit }: { handleSubmit: (form: Form) => void }) {
    const [form, setForm] = useState({ steamid: '' });

    const handleLocalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleSubmit(form);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.image}></div>
                {/* <Image /> */}
                <h1>PlayNext</h1>
            </header>
            <p className={styles.content}>
                Tired of scrolling through endless game lists? Our tool analyzes your gaming library to recommend titles tailored to your tastes. Whether you&apos;re into fast-paced shooters, cozy farming sims, or story-rich adventures — we&apos;ve got the perfect next game for you. Just connect your library and let the discovery begin!
            </p>
            <form className={styles.form} onSubmit={handleLocalSubmit}>
                <label className={styles.label}>
                    <p>Steam ID or Profile URL</p>
                    <input
                        name="steamid"
                        id="steamid"
                        type="text"
                        value={form.steamid}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>
                <button type="submit" className={styles.submit}>Find My Games</button>
            </form>
        </section>
    )
}