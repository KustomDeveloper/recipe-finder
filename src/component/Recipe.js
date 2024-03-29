import React, { useEffect, useState } from "react"
import Header from './Header'
import Footer from './Footer'
import {useLocation} from "react-router-dom"
import axios from 'axios'
import VideoPlayer from './VideoPlayer'

const Recipe = () => {
  const [recipeImg, updateRecipeImage] = useState("") 
  const [videoUrl, updateVideoUrl] = useState("") 
  const [recipeName, updateRecipeName] = useState("") 
  const [recipeInstructions, updateRecipeInstructions] = useState({}) 
  const [recipeIngredients, updateRecipeIngredients] = useState({}) 
  const apiKey = process.env.REACT_APP_API_KEY;

  let location = useLocation()
  let pathname = location.pathname
  var recipeId = pathname.replace(/[\D]/g, '')

  async function fetchRecipe() {
    var options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
        params: {id: recipeId},
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    };
    
    await axios.request(options).then(function (response) {
        console.log(response.data)
        // const singleRecipe = response.data.results.filter( recipe => recipe.id === recipeId );
        // console.log(recipeId, singleRecipe);
        updateRecipeImage(response.data.thumbnail_url)
        updateVideoUrl(response.data.original_video_url)
        updateRecipeName(response.data.name)
        updateRecipeInstructions(response.data.instructions)
        updateRecipeIngredients(response.data.sections[0].components)

    }).catch(function (error) {
        console.error(error);
    });
  } 

  useEffect(() => {
      fetchRecipe()
  }, [])

  return(
    <React.Fragment>
        <Header />
        <div className="recipeslist sections">
            <div className="recipebox">
                <img className="recipe-thumbnail" src={recipeImg} />
                <div className="recipe-content">
                    <div className="recipe-name">{recipeName}</div>
                    <br />
                    <div className="recipe-title">Ingredients:</div>
                    {recipeIngredients && console.log('stuff ', recipeIngredients)}

                        {recipeIngredients && Object.keys(recipeIngredients).map((key, i) => { 
                            return( 
                                <div key={i} className="ingredient" id={"ingredient-" + i}>{recipeIngredients[key].raw_text }</div>
                            )
                        })}
                </div>
            </div>

            <div className="recipebox instructionbox">
            <div className="recipe-title">Instructions:</div>

                {recipeIngredients && Object.keys(recipeInstructions).map((key, i) => {
                    return(
                        <div key={i} className="instruction" id={"instruction-" + i}><b>{(i + 1) + ": "}</b>{recipeInstructions[key].display_text}</div>
                    )
                })}

            {videoUrl ? <VideoPlayer videoUrl={videoUrl} recipeImg={recipeImg} /> : ''}
            
    
            </div>
        </div>
        <Footer />
    </React.Fragment>
  )


}

export default Recipe