
'use client';

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Header from "@/components/header";
import { useAppContext } from "@/providers/appContext";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { state } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!state?.user) {
      router.push("/login/");
    }
  }, [state.user, router])

  return (
    <section className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </section>
  );
}
