import React from 'react'
import parse from 'html-react-parser';

const RecipeList = ({recipes}) => {

    return(
        <div className="recipeslist">
            {Object.keys(recipes).map((key, i) => {
              return(
                <div className="recipebox" key={i}>
                  <ul>
                    <li className="recipe-name">{recipes[key].name}</li>
                    <li className="recipe-description">{parse(recipes[key].description)}</li>
                  </ul>
                </div>
              )
            })}
        </div>
    )
}

export default RecipeList