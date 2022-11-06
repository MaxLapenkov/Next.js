import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="keywords" content="next" />
        <meta name="description" content="I learn next js" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/post">posts</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
