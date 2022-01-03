import React from 'react'
import "./Styling/App.css"
import background from "./Images/pexels-photo-1631677.jpeg"
import Header from "./Components/Header"


const App = () => {
  return (
    
    <div className="app">
    <Header />
      <a href="/day1"> <div id="card" className="card_day1" data-aos="fade-up-right">
         Day-1
      </div></a>  
      <a href="/day2"> <div id="card" className="card_day2" data-aos="fade-up-left">
         Day-2
      </div></a>  
        <a href="/day3"> <div id="card" className="card_day3" data-aos="fade-up-right">
         Day-3
      </div></a>  
      <a href="/day4"> <div id="card" className="card_day4" data-aos="fade-up-left">
         Day-4
      </div></a>
     <img id="background" src={background} alt="" />
     <img id="background" src={background} alt="" /> 
    </div>
    
  )
}

export default App
