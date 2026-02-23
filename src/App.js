

import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Store from './component/Store/Store';
import Cosmetics from './component/Pages/Comsmetics/Cosmetics';
import MaleSection from './component/Pages/MaleSection/MaleSection.jsx'
import FemaleSection from './component/Pages/FemaleSection/FemaleSection.jsx';
import Footer from './component/Footer/Footer.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import Cart from './component/Pages/Cart/Cart.jsx';
import {useState} from 'react'
import Bride from './component/Pages/Bride/Bride.jsx';
import Groom from './component/Pages/Groom/Groom.jsx';
function App() {
  const [cartItems,setCartItems]=useState([])
  const [addButton,setAddButton]=useState(true)
  const [total,SetTotal]=useState(0)
  const [count,setCount]=useState(0)
  function addToCart(item){
    if(cartItems){
      setCartItems([...cartItems,item])
    
      
    }
   
   

  }
  function removeFromCart(item){
    setCartItems(cartItems.filter((_,i)=>
    i!==item)
 ) }
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path='/' element={<Home addToCart={addToCart}/>}/>
      <Route path='/Cosmetics' element={<Cosmetics addToCart={addToCart} cartItems={cartItems}/>} />
      <Route path='/MaleSection' element={<MaleSection addToCart={addToCart} cartItems={cartItems} count={count}/>}/>
      <Route path='/FemaleSection' element={<FemaleSection addToCart={addToCart} cartItems={cartItems} />}/>
       <Route path='/Bride' element={<Bride cartItems={cartItems} SetTotal={SetTotal} addToCart={addToCart}/>} />
      <Route path='/Cart' element={<Cart cartItems={cartItems} SetTotal={SetTotal} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
      <Route path='/Groom' element={<Groom cartItems={cartItems} SetTotal={SetTotal} addToCart={addToCart}/>} />
   
    </Routes>
       <Footer/>
      </BrowserRouter>
    
    </div>
  );
}
export default App;
