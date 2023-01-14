import Router from "next/router";
import { doc, getDoc } from "firebase/firestore/lite";
import { firestore } from "../../firebase";

import { MainLayout } from "../../components/MainLayout";
import styles from "../../styles/recipe.module.scss";

export default function Recipe({ recipe }) {
  const linkClickHandler = () => {
    Router.push("/");
  };

  if (!recipe) return <p>Loading...</p>;
  return (
    <MainLayout>
      <h1>{recipe.title}</h1>
      <img
        src={recipe.image}
        className={styles.image}
        alt={`Изображение ${recipe.title}`}
        loading="lazy"
      ></img>
      {recipe.content && (
        <section className={styles.section}>
          <h3>Ингридиенты:</h3>
          <p>{recipe.content}</p>
        </section>
      )}
      {recipe.proccess && (
        <section className={styles.section}>
          <h3>Процесс приготовления:</h3>
          <p>{recipe.proccess}</p>
        </section>
      )}
      <button onClick={linkClickHandler}>Назад</button>
    </MainLayout>
  );
}

Recipe.getInitialProps = async ({ query }) => {
  try {
    const docRef = doc(firestore, "recipes", query.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const recipe = docSnap.data();
      return {
        recipe,
      };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    return {};
  }
};
