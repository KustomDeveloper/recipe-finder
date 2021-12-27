import React, { useContext } from 'react'
import {RecipeContext} from './RecipeContext'

const Recipes = () => {
    const [recipesList, updateRecipesList] = useContext(RecipeContext)

    return(
        <div className="recipelist">
          <div>{recipesList}</div>
        </div>
    )

}

export default Recipes