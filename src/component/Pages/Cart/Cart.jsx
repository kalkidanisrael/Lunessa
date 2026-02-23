import React ,{useState}from "react";
import './Cart.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Cart = ({ cartItems, addToCart,removeFromCart }) => {

  const [showMenu,setShowMenu]=useState(false)
  const navigate=useNavigate()
  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="cart">
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
             onClick={()=>navigate('/Cart')}/>
          </div>
        


      </div>
      
      <div className="cart-items">

        {cartItems.length === 0 ? (
          <> 
          <img src="https://cdn-icons-gif.flaticon.com/19011/19011869.gif" alt=""  className="cart-icon"/>
          <h2>Your Cart is empty</h2></>
         
        
        ) : (
          cartItems.map((item, index) => (
            <div className="dress-item" key={index}>
              
              <img src={item.image} alt="" />

              <div className="item-details">
                <p className="product-name">{item.name}</p>
                <p>{item.description}</p>
               <li className="product-price">${item.price}</li> 
                
                   <select>
                  <option>Please Select Size</option>
                  <option>L</option>
                  <option>X</option>
                  <option value="">XL</option>
                    </select>

              

               
              
              
              </div>

            </div>
            
          ))
          
        )}
        
      </div>
  
      
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h5>Total: ${totalPrice.toFixed(2)}</h5>
          <button className="buy-btn">Buy Now</button>
        </div>
      )}

      
     
      
    </div>
  );
};

export default Cart;
