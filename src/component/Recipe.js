import React, { useEffect, useState } from "react"
import Header from './Header'
import Footer from './Footer'
import {useLocation} from "react-router-dom"
import axios from 'axios'
import parse from 'html-react-parser'
import { dataSingle } from "../data-single"

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
        url: 'https://tasty.p.rapidapi.com/recipes/detail',
        params: {id: recipeId},
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    };
    
    await axios.request(options).then(function (response) {
        // console.log(typeof response.data)
        console.log(response.data)
        updateRecipeImage(response.data.thumbnail_url)
        updateVideoUrl(response.data.original_video_url)
        updateRecipeName(response.data.name)
        updateRecipeInstructions(response.data.instructions)
        updateRecipeIngredients(response.data.sections[0].components)

        // console.log(response.data.sections[0].components)

    }).catch(function (error) {
        console.error(error);
    });
  } 

  useEffect(() => {
      fetchRecipe()
  }, [])

//   const isObject = (value) => typeof value === "object" && value !== null;
  console.log(recipeInstructions)

  return(
    <React.Fragment>
        <Header />
        <div className="recipeslist sections">
            <div className="recipebox">
            <img className="recipe-thumbnail" src={recipeImg} />
            <div className="recipe-name">{recipeName}</div>
            <br />
            <div className="recipe-title">Ingredients:</div>

                {Object.keys(recipeIngredients).map((key, i) => { 
                    return( 
                        <div key={i} className="ingredient" id={"ingredient-" + i}>{recipeIngredients[key].raw_text }</div>
                    )
                })}
               
            </div>

            <div className="recipebox instructionbox">
            <div className="recipe-title">Instructions:</div>

                {Object.keys(recipeInstructions).map((key, i) => {
                    return(
                        <div key={i} className="instruction" id={"instruction-" + i}><b>{(i + 1) + ": "}</b>{recipeInstructions[key].display_text}</div>
                    )
                })}

            <div className="recipe-title watch-vid-title">Watch the Video:</div>
           
            <a id="" target="_new" href={videoUrl}><img width="100%" src={recipeImg}></img></a>
    
            </div>
        </div>
        <Footer />
    </React.Fragment>
  )


}

export default Recipe