import React from 'react';

import pulse from '../../assets/icons/pulse.svg'
import bluetooth from '../../assets/icons/bluetooth.svg'
import battery from '../../assets/icons/battery.svg'

import './styles.css'

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="box-item">
          <img src={pulse} alt=""/>
          <p>High-Resolution Audio compatible</p>
        </div>

        <div className="box-item">
          <img src={bluetooth} alt=""/>
          <p>Wireless connectivity using bluetooth</p>
        </div>

        <div className="box-item">
          <img src={battery} alt=""/>
          <p>A powerful battery that lasts up to 4 hours of use</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;