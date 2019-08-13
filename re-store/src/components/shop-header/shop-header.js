import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/" >
        <span className="logo text-dark">ReStore</span>
      </Link>
      <Link to="/cart">
        <span className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart"/>
          {numItems} items (${total})
        </span>
      </Link>
    </header>
  );
}

export default ShopHeader;