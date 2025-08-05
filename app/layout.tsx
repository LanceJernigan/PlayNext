import { Inter } from "next/font/google";
import ApolloWrapper from "@/components/apolloWrapper";
import styles from "./layout.module.css";

const inter = Inter();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.body}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
