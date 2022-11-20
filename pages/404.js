import Link from "next/link";
import styles from "../styles/error.module.scss";

import { MainLayout } from "../components/MainLayout";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={styles.error}>Странице не найдена</h1>
      <Link href="/">Вернуться на главную</Link>
    </MainLayout>
  );
}
