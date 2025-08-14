"use client";

import LoginComponent from "@/components/login";
import { Form } from "@/components/login/types";
import styles from './login.module.css';
import { useState } from "react";

export default function Login() {
    const [steamid, setSteamid] = useState("");
    const handleSubmit = (form: Form) => {
        const steamIdPattern = /^\d{17}$/;
        if (steamIdPattern.test(form.steamid.trim())) {
            setSteamid(form.steamid.trim())
        }

        const urlPattern = /steamcommunity\.com\/profiles\/(\d{17})/;
        const match = form.steamid.match(urlPattern);
        if (match) {
            setSteamid(match[1]);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <LoginComponent handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}
