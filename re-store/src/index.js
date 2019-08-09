import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import store from './store';
import BookService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

const bookService = new BookService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
  , document.getElementById('root')
);
