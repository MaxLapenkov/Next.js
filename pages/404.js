import Link from "next/link";
import styles from "../styles/error.module.css";

export default function ErrorPage() {
  return (
    <>
      <h1 className={styles.error}>Error</h1> <Link href="/">go to main</Link>
    </>
  );
}
