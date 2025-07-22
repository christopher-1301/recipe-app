import type { Recipe } from '../types/Recipe';
import styles from './RecipeCard.module.css';

type RecipeCardProps = {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => (
    <article className={styles.recipeCard}>
        <img src={recipe.imageUrl} alt={`image of ${recipe.title}`} className={styles.recipeCardHeaderImage} />
        <h2>{recipe.title}</h2>
    </article>
);