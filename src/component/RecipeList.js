import React from 'react'
import parse from 'html-react-parser'
import {Link} from "react-router-dom"

const RecipeList = ({recipes}) => {

  const seeRecipes = (e) => {
    const btnId = e.target.value
  }

  {console.log("Recipes: ", recipes)}

  return(
      <div className="recipeslist">

          {recipes && Object.keys(recipes).map((key, i) => {
            return(
              <div className="recipebox" key={i}>
                <img className="recipe-thumbnail" src={recipes[key].thumbnail_url} />
                <ul>

                  <li className="recipe-name">{recipes[key].name}</li>

                  <li className="additional-info"> {recipes[key].nutrition.calories ? recipes[key].nutrition.calories : '' }<span className="recipe-subtitle">{recipes[key].nutrition.calories ? ' Calories' : ''}</span></li>

                  <li className="additional-info">{recipes[key].num_servings ? recipes[key].num_servings : ''}<span className="recipe-subtitle"> {recipes[key].num_servings ? ' Servings' : ''}</span></li>

                  <li className="additional-info">{recipes[key].user_ratings.count_positive ? recipes[key].user_ratings.count_positive +'/'+ (recipes[key].user_ratings.count_positive + recipes[key].user_ratings.count_negative) : ''}<span className="recipe-subtitle"> {recipes[key].user_ratings.count_positive ? ' Users liked this recipe' : ''}</span></li>

                </ul>

                <Link to={`/recipe/${recipes[key].id}`}><button className="seeRecipeBtn" onClick={ e => seeRecipes(e) } value={recipes[key].id}>See Recipe</button></Link>
              </div>
            )
          })}
      </div>
  )
}

export default RecipeList