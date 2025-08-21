"use client";

import LoginComponent from "@/components/login";
import { useQuery } from "@apollo/client";
import getUserQuery from "@/queries/user/getUser";
import styles from './login.module.css';
import { useEffect, useState } from "react";
import { useAppContext } from "@/providers/appContext";

const steamIdPattern = /^\d{17}$/;
const steamUrlPattern = /steamcommunity\.com\/profiles\/(\d{17})/;

export default function Login() {
    const { state, actions } = useAppContext();
    const [steamId, setSteamId] = useState("");
    const { data, loading, error } = useQuery(getUserQuery, {
        skip: !steamIdPattern.test(steamId) || !!state.user,
        variables: {
            steamId,
        }
    });

    const handleSubmit = (steamId: string) => {
        const match = steamId.match(steamUrlPattern);
        if (match) {
            setSteamId(match[1]);
        } else {
            setSteamId(steamId.trim())
        }
    }

    useEffect(() => {
        if (data?.user && actions?.setUser) {
            actions?.setUser(data.user);
        }
    }, [data, actions])

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <LoginComponent
                    handleSubmit={handleSubmit}
                    handleChange={handleSubmit}
                    steamId={steamId}
                    user={state?.user}
                    loading={loading}
                />
            </div>
            <div className={styles.videoWrapper}>
                <video
                    part="video"
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    poster="https://images.pexels.com/videos/3942587/abstract-colours-experimental-macro-3942587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    src="https://videos.pexels.com/video-files/3942587/3942587-hd_1920_1080_25fps.mp4"
                    preload="metadata"
                />
            </div>
        </div>
    );
}
