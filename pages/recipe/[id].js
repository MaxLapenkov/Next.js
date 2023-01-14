import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";

import { MainLayout } from "../../components/MainLayout";
import styles from "../../styles/recipe.module.scss";

const getRecipe = async (id) => {
  const responce = await fetch(`${process.env.API_URL}/recipes/${id}`);
  const recipe = await responce.json();
  return recipe;
};

export default function Recipe({ recipe: serverRecipe }) {
  const router = useRouter();
  const [recipe, setRecipe] = useState(serverRecipe);

  useEffect(() => {
    if (!serverRecipe) {
      getRecipe(router.query.id).then((result) => setRecipe(result));
    }
  }, [serverRecipe]);

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
    const recipe = await getRecipe(query.id);
    return {
      recipe,
    };
  } catch (error) {
    return {};
  }
};
