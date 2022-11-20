import Link from "next/link";
import styles from "../styles/recipeCard.module.scss";

export function RecipeCard({ recipe }) {
  return (
    <Link className={styles.card} href={`/recipe/${recipe.id}`}>
      <h4>{recipe.title}</h4>
      <img src={recipe.image} alt={`Изображение ${recipe.title}`}></img>
      <div>
        <p>{recipe.content}</p>
      </div>
    </Link>
  );
}
