import React from 'react';
import { HomePage, CartPage } from '../pages';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import ShoppingCartTable from '../shopping-cart-table';

const App = () => {

  return (
      <main role="main" className="container">
        <ShopHeader numItems={5} total={100}/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/cart' component={CartPage} />
        </Switch>
        <ShoppingCartTable/>
      </main>
  );
}

export default App;