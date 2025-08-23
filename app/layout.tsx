import { Inter } from "next/font/google";
import ApolloWrapper from "@/providers/apolloWrapper";
import styles from "./layout.module.css";
import { AppProvider } from "@/providers/appContext";

const inter = Inter({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.body}>
        <ApolloWrapper>
          <AppProvider>
            {children}
          </AppProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
