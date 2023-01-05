import { MainLayout } from "../components/MainLayout";
import { RecipeCard } from "../components/RecipeCard";

import styles from "../styles/recipeList.module.scss";

export default function Recipes({ recipes }) {
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

Recipes.getInitialProps = async () => {
  try {
    const responce = await fetch(`${process.env.API_URL}/recipes`);
    const recipes = (await responce?.json()) ?? [];
    return {
      recipes,
    };
  } catch (error) {
    return [];
  }
};
