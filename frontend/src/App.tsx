import type {Recipe} from "./types/Recipe.ts";

import {useEffect, useState} from "react";

import RecipeCard from "./components/RecipeCard.tsx";
import {AppBar, Container, Grid, Paper, Toolbar} from "@mui/material";


const App: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error("Error fetching recipes:", err));
    }, []);
    
    return (
        <>
            <AppBar>
                <h1>My recipes</h1>
            </AppBar>
            <Toolbar/>
            <Paper>
                <h2>Filters</h2>
            </Paper>

            <Container sx={{marginTop: 4}}>
                <Grid container spacing={3}>
                    {recipes.map((recipe) => (
                        <Grid item sx={{mb: 2}}>
                            <RecipeCard
                                title={recipe.title}
                                description={recipe.description}
                                imageUrl={recipe.imageUrl || "https://via.placeholder.com/150"}
                                url={recipe.url}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}
export default App
