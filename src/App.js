import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import SearchBar from './component/SearchBar'
import Recipes from './component/Recipes'
import { RecipeContext } from './component/RecipeContext'

function App() {
  const [recipesList, updateRecipesList] = useState('test')

  return (

      <div className="App">
        <Header />
        <RecipeContext.Provider value={recipesList}>
          <SearchBar />
          <Recipes />
        </RecipeContext.Provider>
        <Footer />
      </div>

  );
}

export default App;
