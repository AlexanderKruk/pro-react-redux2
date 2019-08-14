const initialStore = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
}

const reducer = (store = initialStore, action) => {
  console.log(action.type);
  switch(action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...store,
        books: store.books,
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return { 
        ...store,
        books: action.payload,
        loading: false,
        error: null };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...store,
        books: [],
        loading: false,
        error: action.payload
      }
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = store.books.find((book) => book.id === bookId);
      const newItem = {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price
      }
      return { 
        ...store,
        cartItems: [
        ...store.cartItems,
        newItem
      ]
      }
    default: 
      return store;
  }
}

export default reducer;