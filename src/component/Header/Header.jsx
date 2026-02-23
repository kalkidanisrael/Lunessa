import React,{useState} from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { dress_list } from '../../Assets/Assets'
const Header = () => {
  const [showMenu,setShowMenu]=useState(false)
   const [searchActive]=useState(false)
   const [searchText,setSearchText]=useState("  ")
   const navigate=useNavigate()
  
  const filteredProducts=dress_list.filter((dress,index)=>(
    dress.name.toLowerCase().includes(searchText.toLowerCase())
  ))
  
  return (
    <div className='header'>
      
      <div className="header-container">
        <div className="header-left">
          <span  onClick={()=>setShowMenu(!showMenu)}> <img src="https://cdn-icons-png.flaticon.com/128/2516/2516745.png" alt="" />  </span>
           {
            (showMenu)&&
            <div >
              <ul className={`menu-dropdown ${showMenu? 'active':''} `}>
                <div className="menu-title">
                   <h2>Menu</h2><span onClick={()=>setShowMenu(!showMenu)}><img src="https://cdn-icons-png.flaticon.com/128/864/864393.png" alt="" /></span>
                           
                </div>
                <hr />
               <Link to='/'><li>Home</li></Link>
              <span>  <li>about</li></span>
              <Link to='/ItemsDisplay'><span><li>Products</li></span></Link>
              <span><li>Privacy</li></span>
                
                
                
                
              </ul>
            </div>
           }
        </div>
     
        
      <div className="web-title">
        <img src="https://cdn-icons-png.flaticon.com/128/740/740878.png" alt="" />
        <h1>Lunessa</h1>
      </div>
       {
        searchActive && filteredProducts.map((item,index)=>(
          <ul><li><img src={item.image} alt="" /></li>
          <li></li>
          <li></li></ul>
        ))&&
        <input type="text"  value={searchText} onChange={e=>setSearchText(e.target.value)}/>
       }
      <div className="header-right">
       
        <img src="https://cdn-icons-png.flaticon.com/128/3779/3779800.png" alt=""  onClick={()=>navigate('/Cart')}/>
       

      </div>
      

      </div>
      
      <div className="header-image">
        <div className="header-content">
          
            <div className="header-image-container">
              <img src="https://cdn-icons-png.flaticon.com/128/740/740878.png" alt="" />
                <h1>Lunessa</h1> 
            </div>
            <div className="quote">
              
                <h3>
                  Style with out limits</h3>
                
              </div>
              
        
           
       
        
         
            
        </div>
        

      </div>
       
      
      
    </div>
  )
}

export default Header
