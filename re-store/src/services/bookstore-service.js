export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 24.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: 'The Road to learn React',
      author: 'Robin Wieruch',
      price: 23.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41JvDSREHWL._SX384_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title: 'React Design Patterns and Best Practices',
      author: 'Michele Bertoli',
      price: 44.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51VF6WMLNmL._SX404_BO1,204,203,200_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.75) {
          reject(new Error("Some error"));
        } else {
          resolve(this.data);
        }
      }, 700);
    })
  };
}