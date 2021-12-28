import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Search from './component/Search'

function App() {

  return (

      <div className="App">
        <Header />
          <Search />
        <Footer />
      </div>

  );
}

export default App;
