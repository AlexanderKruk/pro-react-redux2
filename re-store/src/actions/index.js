const booksLoaded = (payload) => {
  return {
    type: 'BOOKS_LOADED',
    books: payload
  };
};

export {
  booksLoaded
}