import React from 'react';
import Spinner from '../spinner';
import './app.css';
import withBookstoreService from '../hoc';

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks())
  return (
      <Spinner />
  );
}

export default withBookstoreService()(App);