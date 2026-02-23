import React ,{useState} from 'react'
import { bride_list, tiara_list } from '../../../Assets/Assets'
import './Bride.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Bride = ({addToCart}) => {
  const [showMenu,setShowMenu]=useState(false)
  const navigate=useNavigate()

  return (
    <div className='bride'>
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
        <h3>Bridal Clothes</h3>
         <div className="bridal-clothes">
        {
            bride_list.map((element,index)=>(
               
                    <ul>
                   <li> <Link to='/Cart'><button onClick={()=>addToCart(element)}><img src={element.image} alt="" /></button></Link></li>
                    <li><p>{element.name}</p></li>
                    <li className='price-tag'>${element.price}</li>
                </ul>

              
                
            ))
        }
          </div>
          <h3>Bridal Accessories</h3>
            <div className="bridal-accessories">
         {
           tiara_list.map((element,index)=>(
          
                 <ul>
                    <li ><Link to='/Cart'><button onClick={()=>addToCart(element)}><img src={element.image} alt="" /></button></Link></li>
                    <li><p>{element.name}</p></li>
                    <li className='price-tag'>${element.price}</li>
                </ul>

          
               
            ))
        }
          </div>
      
    </div>
  )
}

export default Bride;
