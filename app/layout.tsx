import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elza Power",
  //TODO: change description
  description: "la description de la page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="wireframe">
      <Head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="elza power" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
