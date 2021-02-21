import React from 'react';

import './styles.css'

const ProductInfo = () => {
  return (
    <div className="infos">
      <div className="infos-box">

        <h1 className="title">Hyper X ON-EAR</h1>
        <p className="description">Wireless over-ear headphones</p>
        <p className="avaliations">4.2 (335 avaliations)</p>

        <div className="dimension-product">
          <p className="title-session">Driver unit</p>
          <p className="info-session">70 mm, dome type (CCAW Voice Col)</p>
        </div>

        <div className="specs">
          <p className="title-session">Frequency Response</p>
          <p className="info-session">4 Hz + 100.000 Hz</p>
        </div>

        <div className="add-car-session">
          <p className="price-value">$89.99</p>
          <button className="add-car-button" type="button">Add to Cart</button>
        </div>

      </div>
    </div>
  )
}

export default ProductInfo;