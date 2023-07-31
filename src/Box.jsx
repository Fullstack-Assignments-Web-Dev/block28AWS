import './App.css'
import Blue from './Blue'
import Red from './Red'
import Home from './Home'
import Mario from './Mario'
import Luigi from './Luigi'
import Princess from './Princess'
import { Routes, Route } from "react-router-dom"

function Box() {
  
  return (
    <>
      
    <div id="box">
    
       <Routes>
          <Route path="/Blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/" element={<Home />} />    
          <Route path="/Mario" element={<Mario />} />
          <Route path="/Luigi" element={<Luigi />} />
          <Route path="/Princess" element={<Princess />} />   
        </Routes>
        
      </div>
                   
    </>
    
  )
}

export default Box
