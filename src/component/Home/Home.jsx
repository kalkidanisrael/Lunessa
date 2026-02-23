import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ItemsDisplay from '../ItemsDisplay/ItemsDisplay'

const Home = ({addToCart}) => {
  return (
    <div>
        
       <Header/>
        <ItemsDisplay addToCart={addToCart}/>
       

      
    </div>
  )
}

export default Home
