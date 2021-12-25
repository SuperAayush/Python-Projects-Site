import React from 'react'
import "./Styling/App.css"
import background from "./Images/pexels-photo-1631677.jpeg"



const App = () => {
  return (
    
    <div className="app">
      <a href="/day1"> <div id="card" className="card_day1" data-aos="fade-right">
         Day-1
      </div></a>  
      <a href="/day1"> <div id="card" className="card_day1" data-aos="fade-right">
         Day-2
      </div></a>  
     <img id="background" src={background} alt="" />
    </div>
    
  )
}

export default App
