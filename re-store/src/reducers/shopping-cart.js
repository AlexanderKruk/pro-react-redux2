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

const updateOrder = (bookId, state, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems, orderTotal, countTotal } } = state;
  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex((book) => book.id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return {
    orderTotal: orderTotal + book.price * quantity,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    countTotal: countTotal + quantity
  }
};

const updateShoppingCart = (state, action) => {

  if(state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      countTotal: 0
    }
  }

  switch(action.type) {

    case 'BOOK_ADDED_TO_CART':
      return updateOrder(action.payload, state, 1);

    case 'BOOK_DELETE_FROM_CART':
      return updateOrder(action.payload, state, -1);

    case 'ALL_BOOK_DELETE_FROM_CART':
      const item = state.shoppingCart.cartItems.find((book) => book.id === action.payload);
      return updateOrder(action.payload, state, -item.count);
    
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;