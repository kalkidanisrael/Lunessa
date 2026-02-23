import React,{useState} from 'react'
import { fashion_list, men_bag, men_jeans, men_list, men_sweater, men_tishert } from '../../../Assets/Assets'
import { Link } from 'react-router-dom'
import './MaleSection.css'
const MaleSection = ({addToCart}) => {
  const [showMenu,setShowMenu]=useState(false)
  return (
    <div className='male-contents'>
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
                    className='x'/>
                  </span>
                </div>
                <hr />
               
                 <Link to='/'><li>Home</li></Link> 
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
          <div className="right">
            
            <img
              src="https://cdn-icons-png.flaticon.com/128/3779/3779800.png"
              alt=""
            />
          </div>
        
      </div>
      <div className="open">
        <img src="https://cdn-icons-gif.flaticon.com/11188/11188710.gif" alt="" />
      </div>
      <div className="image-container">
        <h3>Stylish Jeans</h3>
        <div className="jeans">
          {
                 men_jeans.map((element,index)=>(
                      <ul key={index}>
                          <li><Link to='/Cart'><button onClick={()=>addToCart(element)}><img src={element.image} alt="" /></button></Link></li>
                          <li><p>{element.name}</p></li>
                          <li className='price-tag'>${element.price}</li></ul>
                  ))
              }

        </div>
        <h1>Sweater</h1>
        <div className="sweater">
           {
                men_sweater.map((fashion,index)=>(

                  <ul>
                    <li><Link to='/Cart'><button onClick={()=>addToCart(fashion)}><img src={fashion.image} alt="" /></button></Link>
                 
                  </li>
                    <li> <p>{fashion.name}</p></li>
                    <li className='price-tag'>${fashion.price}</li>
                  </ul>
                  
                      
                  
                  
                ))
              }

        </div>
        <h3>T-Shirts</h3>
<div className="tishert">
  {
                men_tishert.map((fashion,index)=>(
                  <div>
                    <ul key={index}>
                      <Link to='/Cart'><li ><button onClick={()=>addToCart(fashion)}><img src={fashion.image} alt="" /></button></li></Link> 
                 
                      <li><p>{fashion.name}</p></li>
                      <li className='price-tag'>${fashion.price}</li>
                    </ul>
                            
                  </div>
                  
                ))
              }

</div>
  <h3>Bags</h3>
             <div className="bag">
              {
                men_bag.map((fashion,index)=>(
                  <div>
                    <ul><li>
                      <Link to='/Cart'><button onClick={()=>addToCart(fashion)}><img src={fashion.image} alt="" /></button></Link></li>
                    <li><p>{fashion.name}</p></li>
                    <li className='price-tag'>${fashion.price}</li></ul>
                             
                 
                  </div>
                  
                ))
              }


             </div>
    
              

      </div>
        
    </div>
  )
}

export default MaleSection
