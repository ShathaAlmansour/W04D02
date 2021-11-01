import React, { useState , useEffect } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import ToDo from "./components/ToDo"


const App = () => {
    return (
      <div>
        <Header />
        <ToDo />
        <Footer />
      </div>
    )
  }

  export default App;

