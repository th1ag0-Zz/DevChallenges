import React from 'react';
import Carousel from '../Carousel/Carousel'
import Product_Info from '../Product-Info/Product-Info';

import './styles.css'

const Content = () => {
  return (
    <div className="container">

      <main>
        <Carousel />
        <Product_Info />
      </main>

    </div>
  )
}

export default Content;