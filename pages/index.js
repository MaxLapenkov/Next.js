import { useState, useEffect } from "react";
import { MainLayout } from "../components/MainLayout";
import { RecipeCard } from "../components/RecipeCard";

import styles from "../styles/recipeList.module.scss";

const getRecipes = async () => {
  const responce = await fetch(`${process.env.API_URL}/recipes`);
  const recipes = await responce.json();
  return recipes;
};

export default function Recipes({ recipes: serverRecipes }) {
  const [recipes, setRecipes] = useState(serverRecipes);

  useEffect(() => {
    if (!serverRecipes) {
      getRecipes().then((result) => setRecipes(result));
    }
  }, [serverRecipes]);

  return (
    <MainLayout>
      <h1>Рецепты</h1>
      <ul className={styles.list}>
        {recipes?.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Recipes.getServerSideProps = async () => {
  try {
    const recipes = await getRecipes();
    return {
      recipes,
    };
  } catch (error) {
    return {};
  }
};
