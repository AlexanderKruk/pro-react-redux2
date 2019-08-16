const initialStore = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
}

const updateCartItems = (cartItems, item, itemIndex) => {

  if(item.count ===0) {
    return (
      [
        ...cartItems.slice(0, itemIndex),
        ...cartItems.slice(itemIndex + 1)
      ]
    );
  }

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

const updateCartItem = (book, item = {}, quantity) => {
  
  const { id = book.id,
          title = book.title, 
          count = 0, 
          total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateOrder = (bookId, store, quantity) => {

  const book = store.books.find((book) => book.id === bookId);
  const itemIndex = store.cartItems.findIndex((book) => book.id === bookId);
  const item = store.cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return { 
    ...store,
    cartItems: updateCartItems(store.cartItems, newItem, itemIndex)
  }
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

    case 'BOOK_ADDED_TO_CART':
      return updateOrder(action.payload, store, 1);

    case 'BOOK_DELETE_FROM_CART':
      return updateOrder(action.payload, store, -1);

    case 'ALL_BOOK_DELETE_FROM_CART':
      const item = store.cartItems.find((book) => book.id === action.payload);
      return updateOrder(action.payload, store, -item.count);
      
    default: 
      return store;
  }
}

export default reducer;