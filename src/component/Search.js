import React, { useState } from 'react'
import RecipeList from './RecipeList'
import axios from "axios"

const SearchBar = () => {
    const [search, updateSearch] = useState("");
    const [recipes, updateRecipes] = useState({});
    const apiKey = process.env.REACT_APP_API_KEY;

    async function getRecipesList(e) {
        e.preventDefault()

        var options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {q: search},
            headers: {
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
                'x-rapidapi-key': apiKey
            }
        };

        await axios.request(options).then(function (response) {
            const rawData = response.data.results;
            //Only sjow items with a description
            // const data = rawData.filter(item => item.description);
            //Only show items with a single recipe
            const singleRecipe = rawData.filter(item => !item.recipes);
            updateRecipes(singleRecipe);

        }).catch(function (error) {
            console.error(error);
        });
    }

    return(
        <div className="search">
            <form>
                <label>
                    <input
                    placeholder="Search for a Southern Recipe..."
                    type="text" 
                    value={search}
                    onChange={(e) => updateSearch(e.target.value)}
                    />
                </label>

                <button onClick={(e) => getRecipesList(e)}>Search</button>
            </form>

            <RecipeList recipes={recipes}/>

        </div>
    )
    
}

export default SearchBar