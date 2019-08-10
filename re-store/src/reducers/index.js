const initialStore = {
  books: [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler' 
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard'
    }
  ]
}

const reducer = (store = initialStore, action) => {
  switch(action.type) {
    case 'BOOKS_LOADED':
      return { books: action.payload };
    default: 
      return store;
  }
}

export default reducer;