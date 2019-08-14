const initialStore = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: "Book 1",
      count: 2,
      total: 40
    },
    {
      id: 2,
      name: "Book 2",
      count: 4,
      total: 120
    }
  ],
  orderTotal: 220
}

const reducer = (store = initialStore, action) => {
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
    default: 
      return store;
  }
}

export default reducer;