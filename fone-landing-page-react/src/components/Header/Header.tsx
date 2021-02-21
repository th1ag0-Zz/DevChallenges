import React from 'react';
import './styles.css';

import logo from '../../assets/logo.svg'
import menu from '../../assets/icons/menu.svg'
import carrinho from '../../assets/icons/carrinho.svg'
import search from '../../assets/icons/search.svg'



const Header = () => {
  return (

    <div className="container">
      <header>
        <img className="logo" src={logo} alt="logo"/>

        <ul className="navigation">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Support</li>
        </ul>

        <div className="icons">
          <a href="#">
            <img src={search} alt="menu"/>
          </a>

          <a href="#">
            <img src={carrinho} alt="menu"/>
          </a>

          <a href="#">
            <img src={menu} alt="menu"/>
          </a>
        </div>
      </header>
    </div>
    
  )
}

export default Header;