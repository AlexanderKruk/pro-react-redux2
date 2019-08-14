const initialStore = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
}

const updateCartItems = (cartItems, item, itemIndex) => {
  if(itemIndex === -1) {
    return (
      [
        ...cartItems,
        item
      ]);
  }

  return (
    [
      ...cartItems.slice(0, itemIndex),
      item,
      ...cartItems.slice(itemIndex + 1)
    ]
  );
};

const updateCartItem = (book, item = {}) => {
  
  const { id = book.id,
          title = book.title, 
          count = 0, 
          total = 0} = item;
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  };
};

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
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = store.books.find((book) => book.id === bookId);
      const itemIndex = store.cartItems.findIndex((book) => book.id === bookId);
      const item = store.cartItems[itemIndex];

      const newItem = updateCartItem(book, item);

      return { 
        ...store,
        cartItems: updateCartItems(store.cartItems, newItem, itemIndex)
      }
    default: 
      return store;
  }
}

export default reducer;