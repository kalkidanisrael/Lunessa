import React from 'react'
import Header from '../Header/Header'
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
