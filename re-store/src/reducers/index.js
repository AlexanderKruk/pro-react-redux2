const initialStore = {
  books: [],
  loading: true,
  error: null
}

const reducer = (store = initialStore, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: store.books,
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return { 
        books: action.payload,
        loading: false,
        error: null };
    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload
      }
    default: 
      return store;
  }
}

export default reducer;