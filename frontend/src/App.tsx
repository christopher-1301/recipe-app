import './global.css'

import type { Recipe } from './types/Recipe'
import {RecipeCard} from "./components/RecipeCard.tsx";

const mockRecipes: Recipe[] = [
    {
        id: 1,
        title: "Classic Chocolate Chip Cookies",
        description: "Crispy edges, chewy centers, loaded with chocolate chips",
        url: "https://example.com/chocolate-chip-cookies",
        imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
        dateAdded: new Date('2024-01-15'),
        dateUpdated: new Date('2024-01-15')
    },
    {
        id: 2,
        title: "Homemade Pizza Margherita",
        description: "Fresh basil, mozzarella, and tomato sauce on crispy crust",
        url: "https://example.com/pizza-margherita",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
        dateAdded: new Date('2024-01-10'),
        dateUpdated: new Date('2024-01-12')
    },
    // {
    //     id: 3,
    //     title: "Creamy Chicken Alfredo",
    //     description: "Rich and creamy pasta with tender chicken pieces",
    //     url: "https://example.com/chicken-alfredo",
    //     imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
    //     dateAdded: new Date('2024-01-08'),
    //     dateUpdated: new Date('2024-01-08')
    // }
];

function App() {
    return (
        <div className={'homePage'}>
            <h1>Recipe App</h1>
            <p>Take a look at the {mockRecipes.length} recipes here!</p>
            {mockRecipes.map(recipe => (
                <RecipeCard key={recipe.title} recipe={recipe} />
            ))}
        </div>
    )
}
export default App
