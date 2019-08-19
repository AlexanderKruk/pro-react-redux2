import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ total, count }) => {
  
  return (
    <header className="shop-header row">
      <Link to="/" >
        <span className="logo text-dark">ReStore</span>
      </Link>
      <Link to="/cart">
        <span className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart"/>
          {count} items (${total})
        </span>
      </Link>
    </header>
  );
}

const mapStateToProps = ({ shoppingCart: {orderTotal, countTotal}}) => {
  return {
    total: orderTotal,
    count: countTotal
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopHeader);