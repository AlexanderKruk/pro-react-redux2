const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
   }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
}

const allBookDeleteFromCart = (bookId) => {
  return {
    type: 'ALL_BOOK_DELETE_FROM_CART',
    payload: bookId
  }
}

const bookDeleteFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETE_FROM_CART',
    payload: bookId
  }
}

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
                  .then((data) => dispatch(booksLoaded(data)))
                  .catch((error) => dispatch(booksError(error)));
  }

export {
  fetchBooks,
  bookAddedToCart,
  allBookDeleteFromCart,
  bookDeleteFromCart
}