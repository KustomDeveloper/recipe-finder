import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './component/Home'
import Recipe from './component/Recipe'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
