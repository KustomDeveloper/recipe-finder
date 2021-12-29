import React from 'react'
import parse from 'html-react-parser'
import {Link} from "react-router-dom"

const RecipeList = ({recipes}) => {

  const seeRecipes = (e) => {
    const btnId = e.target.value
  }

  {console.log(recipes)}

  return(
      <div className="recipeslist">

          {Object.keys(recipes).map((key, i) => {
            return(
              <div className="recipebox" key={i}>
                <img className="recipe-thumbnail" src={recipes[key].thumbnail_url} />
                <ul>
                  <li className="recipe-name">{recipes[key].name}</li>
                  {/* <li className="recipe-description">{recipes[key].description ? parse(recipes[key].description) : ""}</li> */}
                </ul>

                <Link to={`/recipe/${recipes[key].id}`}><button className="seeRecipeBtn" onClick={ e => seeRecipes(e) } value={recipes[key].id}>See Recipe</button></Link>
              </div>
            )
          })}
      </div>
  )
}

export default RecipeList