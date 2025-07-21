import type { Recipe } from '../types/Recipe';

type RecipeCardProps = {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => (
    <aside>
        <img src={recipe.imageUrl} alt={`image of ${recipe.title}`} />
        <h2>{ recipe.title }</h2>
    </aside>
);