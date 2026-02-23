import React,{useState} from "react";
import { cosmo_list, cream_list, makeUp_list, oil_list } from "../../../Assets/Assets";
import { useNavigate } from "react-router-dom";
import "./Cosmetics.css";
import { Link } from "react-router-dom";
const Cosmetics = ({addToCart}) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate=useNavigate()
  return (
    <div className="cosmetics">
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
                      <div id="menu-title">
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
      <h3>Perfumes</h3>
        <div className="cos">
          {cosmo_list.map((element, index) => (
          <ul key={index}>
            <li> <Link to='/Cart'><button onClick={()=>addToCart(element)}><img src={element.image} alt="" /></button></Link> </li>
            <li><p>{element.name}</p></li>
            <li className="price-tag">${element.price}</li>
          </ul>
        ))}
        </div>
        <h3>Hair Products</h3>
        <div className="oil-products">
         {
            oil_list.map((element,index)=>(
            <ul>
         <Link to='/Cart'><button onClick={()=>addToCart(element)}><img src={element.image} alt="" /></button></Link> 
             <li><p>{element.name}</p></li>
             <li className="price-tag">${element.price}</li>
            </ul>
          ))
          }
       </div>
      
            <h3>Face Creams</h3>
         <div className="cream">
          {
          cream_list.map((element,index)=>(
            <ul>
             <li key={index}><Link to='/Cart'><button onClick={()=>addToCart(element)}><img src={element.image} alt="" /></button></Link> </li>
             <li><p>{element.name}</p></li>
             <li className="price-tag">${element.price}</li>
            </ul>
          ))
        }

        </div>
       
        
      </div>
    
  );
};

export default Cosmetics;
