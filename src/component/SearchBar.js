import React, { useState, useContext } from 'react'
import {RecipeContext} from './RecipeContext'
import axios from "axios"
import {data} from "../data.js" 

const SearchBar = () => {
    const [search, updateSearch] = useState("");
    const [recipesList, updateRecipesList] = useContext(RecipeContext)
    const apiKey = process.env.REACT_APP_API_KEY;

    const getRecipesList = (e) => {
        e.preventDefault()
        // return data
        console.log(data)
        // updateRecipesList(data)
        console.log(typeof updateRecipesList)

        // var options = {
        //     method: 'GET',
        //     url: 'https://tasty.p.rapidapi.com/recipes/list',
        //     params: {from: '0', size: '20', tags: 'under_30_minutes'},
        //     headers: {
        //         'x-rapidapi-host': 'tasty.p.rapidapi.com',
        //         'x-rapidapi-key': apiKey
        //     }
        // };

        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }

    // console.log(recipeContext)

    return(
        <div className="searchbar">
            <div>{ console.log(typeof recipesList) }</div>
            <div>{ recipesList }</div>
            <form>
                <label>
                    <input
                    placeholder="Search for a Southern Recipe..."
                    type="text" 
                    value={search}
                    onChange={(e) => updateSearch(e.target.value)}
                    />
                </label>

                <button onClick={(e) => getRecipesList(e)}>Submit</button>
            </form>

        </div>
    )
    
}

export default SearchBar