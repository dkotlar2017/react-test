import React from 'react';
import './Header.css';

function Header(props) {

    return (
      <div className="Header-container">
        <span className="Header-title">E-scooter Emporium</span>
        <span className="Header-count">{props.total > 0 ? `(${props.total})` : ''} <i className="material-icons">shopping_cart</i></span>
      </div>
    );

}

export default Header;
