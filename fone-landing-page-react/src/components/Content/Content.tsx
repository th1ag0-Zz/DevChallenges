import React from 'react';
import Carousel from '../Carousel/Carousel'
import ProductInfo from '../Product-Info/ProductInfo';

import './styles.css'

const Content = () => {
  return (
    <div className="container">

      <main>
        <Carousel />
        <ProductInfo />
      </main>

    </div>
  )
}

export default Content;