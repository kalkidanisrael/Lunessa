import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <h3 className='nav-title' >Style That Fits Your Life</h3>
            <ul>
             
             <Link to='/FemaleSection'><button><li >Women</li></button></Link>
            <Link to='/MaleSection'><button><li>Men</li></button></Link>
            <Link to='/Groom'><button><li>Groom</li></button></Link>
            <Link to='/Bride'><button><li>Bride</li></button></Link>
            </ul>

        </div>
      
      
    </div>
  )
}

export default Navbar
