import NextNProgress from "nextjs-progressbar";

import "normalize.css";
import "../styles/globalStyles.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}
