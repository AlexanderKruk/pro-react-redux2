import React, {Fragment} from 'react';
import BookListContainer from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

export const HomePage = () => {

  return (
    <Fragment>
      <BookListContainer />
      <ShoppingCartTable />
    </Fragment>
  );
}