import React ,{useState}from 'react'
import { dress_list, female_list, female_pants, jewellery_list } from '../../../Assets/Assets'
import { fashion_list } from '../../../Assets/Assets'
import './FemaleSection.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const FemaleSection = ({addToCart}) => {
  const [showMenu,setShowMenu]=useState(false)
 

  const navigate=useNavigate()
  
  return (
    <div className='female-clothes'>
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
      <div className="image-container">
        <h1>Dresses</h1>
        <div className="dress-container">
          {
            dress_list.map((dress,index)=>(
              
               <div className="fm" value={dress._id}>
                <ul>
                  <li> <Link to='/Cart'> <button onClick={()=>addToCart(dress)}> <img src={dress.image} alt="" id='itemInput' /></button></Link></li>
                  <li><p>{dress.name}</p></li>
                  <li className='price-tag'>${dress.price}</li>
                </ul>
              
                
               

               </div>
               
             
              
            ))
            
          }
          
        </div>
         <h1>Jeans</h1>
        <div className="female-pants">
         
          
                {
                  female_pants.slice(0,7).map((fashion,index)=>(
                    <div className='fp'> 
                    <ul>
                      <li><Link to='/Cart'><button onClick={()=>addToCart(fashion)}><img src={fashion.image} alt="" /></button></Link></li>
                      <li><p>{fashion.name}</p></li>
                      <li className='price-tag'>${fashion.price}</li>
                    </ul>
                     
                    </div>
                  ))
                }


        </div>
        <h1>Jewllerys</h1>
        
        
        <div className="jewellery">
          
                {
                  jewellery_list.slice(0,7).map((fashion,index)=>(
                    <div className='fj'> 
                    <ul>
                      <li> <Link to='/Cart'><button onClick={()=>addToCart(fashion)}><img src={fashion.image} alt="" /></button>
                    </Link> </li>
                      <li><p>{fashion.name}</p></li>
                      <li className='price-tag'> ${fashion.price}</li>
                    </ul>

                     
                    </div>
                  ))
                }


        </div>
        <h1>Purses</h1>
        <div className="female-bag">
          
                {
                 fashion_list.slice(0,7).map((fashion,index)=>(
                    <div className='fb'> 
                    <ul>
                      <li> <Link to='/Cart'><button onClick={()=>addToCart(fashion)}><img src={fashion.image} alt="" /></button></Link>   </li>
                      <li><p>{fashion.description}</p></li>
                      <li className='price-tag'>${fashion.price}</li>
                    </ul>
                    </div>
                  ))
                }


        </div>
        
         

      </div>
         
      
    </div>
  )
}

export default FemaleSection
