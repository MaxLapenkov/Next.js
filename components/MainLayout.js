import Link from "next/link";
import Head from "next/head";

import styles from "../styles/main.module.scss";

export function MainLayout({ children, title = "Recipes App" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next" />
        <meta name="description" content="I learn next js" />
        <meta charSet="utf-8" />
      </Head>
      <nav className={styles.nav}>
        <Link href="/">Рецепты</Link>
        <Link href="/products">Сезонные продукты</Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
