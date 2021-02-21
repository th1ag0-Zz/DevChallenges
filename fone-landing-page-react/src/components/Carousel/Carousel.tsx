import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import img from '../../assets/fone.png'

import './styles.css'

const Carousel = () => {
  return (
    <AwesomeSlider
      organicArrows={false}
    >
      <div data-src={img} />
      <div data-src={img} />
      <div data-src={img} />
    </AwesomeSlider>
  )
}

export default Carousel;