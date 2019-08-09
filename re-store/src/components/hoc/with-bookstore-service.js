import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => (
    <BookstoreServiceConsumer>
    {
      (bookService) => {
        const serviceProps = mapMethodsToProps(bookService)
        return (
          <Wrapped {...props} {...serviceProps}/>
        );
      }
    }
    </BookstoreServiceConsumer>
  );
};

export default withBookstoreService;