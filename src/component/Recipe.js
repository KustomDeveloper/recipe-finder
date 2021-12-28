import React, { useEffect, useState } from "react"
import Header from './Header'
import Footer from './Footer'
import {useLocation} from "react-router-dom"
import axios from 'axios'
import parse from 'html-react-parser'

const Recipe = () => {
  const [recipes, updateRecipes] = useState("") 
  const apiKey = process.env.REACT_APP_API_KEY;

  let location = useLocation()
  let pathname = location.pathname
  var recipeId = pathname.replace(/[\D]/g, '')

  console.log("outside function: ", recipeId)

  const fetchRecipe = () => {
      console.log("in function: ", recipeId)
    var options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/detail',
        params: {id: recipeId},
        headers: {
            'x-rapidapi-host': 'tasty.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data.results)
        updateRecipes(response.data.results)
    }).catch(function (error) {
        console.error(error);
    });
  } 

  useEffect(() => {
    setTimeout(()=>{
    
  
    fetchRecipe()
}, 1000)
  }, [])

//   forceUpdate()

  return(
    <React.Fragment>
        <Header />
        <div className="recipeslist">
          {Object.keys(recipes).map((key, i) => {
               return(
                <div className="recipebox" key={i}>
                  <img className="recipe-thumbnail" src={recipes[key].thumbnail_url} />
                  <ul>
                    <li className="recipe-name">{recipes[key].name}</li>
                    {/* <li className="recipe-description">{parse(recipes[key].description)}</li> */}
                  </ul>
                 
                 
                </div>
              )
          })}
        </div>
        <Footer />
    </React.Fragment>
  )


}

export default Recipe