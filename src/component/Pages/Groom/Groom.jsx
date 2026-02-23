import React, { useState } from 'react'
import { groom_accessories, groom_suit } from '../../../Assets/Assets'
import './Groom.css'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
const Groom = ({addToCart}) => {
  const [showMenu,setShowMenu]=useState(false)
  const navigate=useNavigate()
  return (
    <div className='groom'>
      <div className="cloth-header">
              <div className="left">
                <span onClick={() => setShowMenu(!showMenu)}>
                  {" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2516/2516745.png"
                    alt=""
                  />{" "}
                </span>
                {showMenu && (
                  <div>
                    <ul className={`menu-dropdown ${showMenu ? "active" : ""} `}>
                      <div className="menu-title">
                        <h2>Menu</h2>
                        <span onClick={() => setShowMenu(false)}>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/864/864393.png"
                            alt=""
                          />
                        </span>
                      </div>
                      <hr />
                      <span>
                       <Link to='/'><li>Home</li></Link> 
                      </span>
                      <span>
                        {" "}
                        <li>about</li>
                      </span>
                      <span>
                        <li>Products</li>
                      </span>
                      <span>
                        <li>Privacy</li>
                      </span>
                    </ul>
                  </div>
                )}
              </div>
              
                <div className="title">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/740/740878.png"
                    alt=""
                  />
                  <h1>Lunessa</h1>
                </div>
                <div className="right" >
                  
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3779/3779800.png"
                    alt=""
                    onClick={()=>navigate('/Cart')}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              
            </div>
            <div className="open">
              <img src="https://cdn-icons-gif.flaticon.com/11188/11188710.gif" alt="" />
            </div>
        <h3>Groom Suits</h3>
        <div className="groom-clothes">
             {
        groom_suit.map((suit,index)=>(
            <ul>
                <li><Link to='/Cart'><button onClick={()=>addToCart(suit)}><img src={suit.image} alt="" /></button></Link></li>
                <li><p>{suit.name}</p></li>
                <li className='price-tag'>${suit.price}</li>
            </ul>
        ))
      }

        </div>
     <h3>Groom Accessories</h3>
      <div className="groom-accessories">
        {
        groom_accessories.map((item,index)=>(
            <ul>
                <li><Link to='/Cart'><button onClick={()=>addToCart(item)}><img src={item.image} alt="" /></button></Link></li>
                <li><p>{item.name}</p></li>
                <li className='price-tag'>${item.price}</li>
            </ul>
            
        ))
      }

      </div>
      
    </div>
  )
}

export default Groom
