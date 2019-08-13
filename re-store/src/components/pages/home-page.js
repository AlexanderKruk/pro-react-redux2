import React, {Fragment} from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

export const HomePage = () => {

  return (
    <Fragment>
      <BookList />
      <ShoppingCartTable/>
    </Fragment>
  );
}