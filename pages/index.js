import { MainLayout } from "../components/MainLayout";
import { RecipeCard } from "../components/RecipeCard";
import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../firebase";

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

export async function getServerSideProps() {
  const recipesCol = collection(firestore, "recipes");
  const recipeSnapshot = await getDocs(recipesCol);
  const recipes = recipeSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return {
    props: {
      recipes,
    },
  };
}
