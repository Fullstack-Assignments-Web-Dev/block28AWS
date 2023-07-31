import './App.css'
import { Link } from "react-router-dom"

function Nav() {
  
  return (
    <>
    
    <div id="navbar">
      <Link className='navLink' to="/"> Home </Link>
      <Link className='navLink' to="/Blue"> Blue </Link>
      <Link className='navLink' to="/Red"> Red </Link> 
      <Link className='navLink' to="/Mario"> Mario </Link>
        <Link className='navLink' to="/Luigi"> Luigi </Link>
        <Link className='navLink' to="/Princess"> Princess </Link> 
    
        </div>
    
    
    </>
    
  )
}

export default Nav
