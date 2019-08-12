const initialStore = {
  books: [],
  loading: true
}

const reducer = (store = initialStore, action) => {
  switch(action.type) {
    case 'BOOKS_LOADED':
      return { 
        books: action.payload,
        loading: false };
    default: 
      return store;
  }
}

export default reducer;